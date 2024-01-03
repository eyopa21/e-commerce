
<script setup>
import { RegsiterValidationSchema } from '../../zod/RegisterSchema'
const formView = ref('login');
const message = ref('');
const errorMessage = ref('');
const RegisterState = reactive({
    username: '',
    email: '',
    password: ''
})

const register = async () => {
    console.log("Register")
};

</script>


<template>
    <div class="max-w-lg mx-auto my-16 min-h-[600px] lg:my-24">
        <div class="flex flex-col items-center">
            <Logo class="mb-6 scale-125" />
            <h1 class="text-xl font-semibold lg:text-3xl">Welcome to our platform</h1>

            <div class="my-2 text-center">
                Has account?
                <a class="font-semibold cursor-pointer text-primary" @click="formView = 'login'">
                    Please login </a>.
            </div>

        </div>
        <UForm :schema="RegsiterValidationSchema" :state="RegisterState" class="mt-6">
            <div>
                <UFormGroup name="username">

                    <label for="username"> Username
                        <span class="text-red-500">* </span> <br />
                        <input v-model="RegisterState.username" id="username" placeholder="Username" type="text" />
                    </label>
                </UFormGroup>

                <UFormGroup name="email">
                    <label for="email"> Email <span class="text-red-500">*</span> <br />
                    </label>
                    <input v-model="RegisterState.email" id="email" placeholder="abebe@gmail.com" type="email" />
                </UFormGroup>
                <UFormGroup name="password">

                    <label for="password">Password <span class="text-red-500">*</span> <br />
                        <VuePasswordInput v-model="RegisterState.password" id="password" class="mb-4"
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
            <button class="flex items-center justify-center gap-4 mt-4 text-lg">
                <LoadingIcon v-if="isPending" stroke="4" size="16" color="#fff" />
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
