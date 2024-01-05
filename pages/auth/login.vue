
<script setup>
import { LoginValidationSchema } from '../../zod/LoginSchema'
import login_query from '../queries/auth/login.gql'
const { onLogin, onLogout, getToken } = useApollo()
const { mutate: Login, onDone, onError, loading } = useMutation(login_query)
const { myAuth } = useAuth()
const router = useRouter()
const UID = useCookie('uid');
const ROLE = useCookie('ROLE');
const TOKEN = useCookie('token', {
    secure: true,
    httpOnly: true
});

const formView = ref('login');
const message = ref('');
const errorMessage = ref('');
const loginState = reactive({
    email: '',
    password: ''
})




const login = async () => {
    console.log("login")
    Login({ email: loginState.email, password: loginState.password })
    onDone(async res => {
        console.log(res)
        await onLogin(res.data.Login.token)
        try {
            const res = await myAuth()
            console.log("tokichaw", res)
        } catch (err) {
            console.log(err, "err")
        }

    })
    onError(err => {
        console.log(err)
    })
};



const buttonText = computed(() => {
    if (formView.value === 'login') {
        return 'Login'
    } else if (formView.value === 'register') {
        return 'Register'
    } else if (formView.value === 'forgotPassword') {
        return 'ResetPassword'
    }
    return 'login';
});
</script>


<template>
    <div class="max-w-lg mx-auto my-16 min-h-[600px]">
        <div class="flex flex-col items-center">
            <h1 class="mb-6 scale-125 text-4xl">LOGO</h1>
            <h1 class="text-xl font-semibold lg:text-3xl">Login To account</h1>
            <div class="my-2 text-center">
                No account?
                <NuxtLink to="/auth/register"
                    class="font-semibold cursor-pointer text-primary hover:underline underline-offset-2">
                    Register here</NuxtLink>.
            </div>


        </div>
        <UForm :schema="LoginValidationSchema" :state="loginState" class="mt-6" @submit="login()">


            <div>
                <UFormGroup name="email">
                    <label for="email"> Email <span class="text-red-500">*</span> <br />
                    </label>
                    <input v-model="loginState.email" id="email" placeholder="Email" type="email" />
                </UFormGroup>
                <UFormGroup name="password">
                    <label for="password">Password <span class="text-red-500">*</span> <br />
                        <VuePasswordInput v-model="loginState.password" id="password" class="mb-4"
                            className="border rounded-lg w-full p-3 px-4 bg-white" placeholder="Password" />
                    </label>
                </UFormGroup>
            </div>
            <Transition name="scale-y" mode="out-in">
                <div v-if="message" class="my-4 text-sm text-green-500">
                    {{ message }}
                </div>
            </Transition>
            <Transition name="scale-y" mode="out-in">
                <div v-if="errorMessage" class="my-4 text-sm text-red-500">{{ errorMessage }}</div>
            </Transition>
            <button type="submit" class="flex items-center justify-center gap-4 mt-4 text-lg">
                <VueLoadingIcon v-if="loading" stroke="4" size="16" color="#fff" />
                <span>Login</span>
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
    @apply border rounded-lg mb-4 w-full p-3 px-4 bg-white focus:ring-red-500;
}

form button {
    @apply rounded-lg font-bold bg-gray-800 text-white py-3 px-8 hover:bg-gray-800;
}
</style>
