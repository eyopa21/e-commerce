
<script setup>
import { RegsiterValidationSchema } from '../../zod/RegisterSchema'
import signup_query from '../queries/auth/signup.gql'
const { onLogin, onLogout, getToken } = useApollo()
const { mutate: Signup, onDone, onError, loading } = useMutation(signup_query)
const { myAuth } = useAuth()
const layout = useLayout();
const RegisterState = reactive({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone_number: ''
})


const register = async () => {
    console.log("Register")
    Signup({ email: RegisterState.email, password: RegisterState.password, user_name: RegisterState.username, first_name: RegisterState.firstName, last_name: RegisterState.lastName, phone_number: RegisterState.phone_number })
    onDone(async res => {

        console.log(res.data.SignUp.token)
        await onLogin(res.data.SignUp.token)

        try {
            const res = await myAuth()
            layout.value.showAlert = { error: false, message: "Login success" }
            router.push('/')
        } catch (err) {
            onLogout()
            console.log(err, "err")
            layout.value.showAlert = { error: true, message: "Cannot login, Please try again" }
        }

    })
    onError(err => {
        onLogout()
        console.log(err, "err")
        layout.value.showAlert = { error: true, message: err.message }
    })
};


</script>


<template>
    <div class="max-w-lg mx-auto my-16 min-h-[600px] lg:my-24">
        <div class="flex flex-col items-center">
            <h1 class="mb-6 scale-125 text-4xl"><img src="/gebeya.png" alt="logo" class="w-48 h-24 rounded-lg"></h1>
            <h1 class="text-xl font-semibold lg:text-3xl">Welcome to our platform</h1>

            <div class="my-2 text-center">
                Has account?
                <NuxtLink to="/auth/login"
                    class="font-semibold cursor-pointer text-primary hover:underline underline-offset-2">
                    Please login </NuxtLink>
            </div>

        </div>
        <UForm :schema="RegsiterValidationSchema" :state="RegisterState" class="mt-6" @submit="register">
            <div>
                <UFormGroup name="username">

                    <label for="username"> Username
                        <span class="text-red-500">* </span> <br />
                        <input v-model="RegisterState.username" id="username" placeholder="Username" type="text" />
                    </label>
                </UFormGroup>
                <UFormGroup name="firstname">

                    <label for="firstname"> First name
                        <span class="text-red-500"> </span> <br />
                        <input v-model="RegisterState.firstName" id="firstname" placeholder="First name" type="text" />
                    </label>
                </UFormGroup>
                <UFormGroup name="lastname">

                    <label for="lastname"> Last name
                        <span class="text-red-500"> </span> <br />
                        <input v-model="RegisterState.lastName" id="lastname" placeholder="last name" type="text" />
                    </label>
                </UFormGroup>

                <UFormGroup name="email">
                    <label for="email"> Email <span class="text-red-500">*</span> <br />
                    </label>
                    <input v-model="RegisterState.email" id="email" placeholder="abebe@gmail.com" type="email" />
                </UFormGroup>
                <UFormGroup name="phone_number">
                    <label for="phone_number"> Phone number <span class="text-red-500">*</span> <br />
                    </label>
                    <input v-model="RegisterState.phone_number" id="phone_number" placeholder="09**********" type="text" />
                </UFormGroup>
                <UFormGroup name="password">

                    <label for="password">Password <span class="text-red-500">*</span> <br />
                        <VuePasswordInput v-model="RegisterState.password" id="password" class="mb-4"
                            className="border rounded-lg w-full p-3 px-4 bg-white" placeholder="Password" />
                    </label>
                </UFormGroup>
            </div>

            <button class="flex items-center justify-center gap-4 mt-4 text-lg">
                <VueLoadingIcon v-if="loading" stroke="4" size="16" color="#fff" />
                <span>Register</span>
            </button>
        </UForm>
        <NuxtLink to="/auth/forgot"
            class="flex justify-center my-8 text-center cursor-pointer text-primary underline underline-offset-2">
            Forgot
            password?</NuxtLink>

    </div>
</template>

<style lang="postcss" scoped>
input,
button {
    @apply border rounded-lg mb-4 w-full p-3 px-4 bg-white;
}

form button {
    @apply rounded-lg font-bold bg-gray-800 text-white py-3 px-8 hover:bg-gray-800;
}
</style>
