
<script setup>
import { ForgotPasswordValidationSchema } from '../../zod/ForgotSchema'
const formView = ref('login');

const forgotState = ref({
    email: '',

})


const resetPassword = async () => {
    console.log('reset password')
};

</script>


<template>
    <div class="max-w-lg mx-auto my-16 min-h-[600px] lg:my-24">
        <div class="flex flex-col items-center">
            <h1 class="mb-6 scale-125 text-4xl">LOGO</h1>
            <h1 class="text-xl font-semibold lg:text-3xl text-primary">Reset Your password</h1>


        </div>
        <UForm :schema="ForgotPasswordValidationSchema" :state="forgotState" class="mt-6"
            @submit.prevent="handleFormSubmit(userInfo)">
            <UFormGroup name="email">

                <label for="email"> Email
                    <span span class="text-red-500">* </span> <br />
                    <input v-model="forgotState.email" id="email" placeholder="Email" type="email" />
                </label>
            </UFormGroup>
            <p class="text-sm text-gray-500"> Please enter
                your email
                address and we will
                send you a link to reset your password.</p>


            <button type="submit" class="flex items-center justify-center gap-4 mt-4 text-lg">
                <VueLoadingIcon stroke="4" size="16" color="#fff" />
                <span>Reset Password</span>
            </button>
        </UForm>

        <NuxtLink to="/auth/login"
            class="flex justify-center my-8 text-center cursor-pointer text-primary underline  underline-offset-2">
            Back to
            login</NuxtLink>
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
