
<script setup>
import { VerificationValidationSchema } from '../../zod/VerificationSchema'
import verify_query from '../queries/auth/verify.gql'
const currentUser = useCurrentUser();
const router = useRouter();
const layout = useLayout();
const { mutate: Verify, onDone, onError, loading } = useMutation(verify_query)
const { myAuth } = useAuth();
const verifyState = ref({
    code: '',

})


const verify = async () => {
    console.log('verify')
    Verify({ code: verifyState.value.code, user_id: currentUser.value.id })
    onDone(async (res) => {
        try {
            await myAuth();
            router.push('/')
        } catch (err) {
            layout.value.showAlert = { error: true, message: err }
        }
    })
    onError(err => {
        layout.value.showAlert = { error: true, message: err.message }
    })
};

</script>


<template>
    <div class="max-w-lg mx-auto my-16 min-h-[600px] lg:my-24">
        <div class="flex flex-col items-center">
            <h1 class="mb-6 scale-125 text-4xl"><img src="/gebeya.png" alt="logo" class="w-48 h-24 rounded-lg"></h1>
            <h1 class="text-xl font-semibold lg:text-3xl text-primary">Verify your account</h1>


        </div>
        <UForm :schema="VerificationValidationSchema" :state="verifyState" class="mt-6" @submit="verify">
            <UFormGroup name="code">

                <label for="code"> Verification code
                    <span span class="text-red-500">* </span> <br />
                    <input v-model="verifyState.code" id="code" placeholder="code" type="text" />
                </label>
            </UFormGroup>
            <p class="text-sm text-gray-500"> We have send you a verification code to your email</p>


            <button type="submit" class="flex items-center justify-center gap-4 mt-4 text-lg">
                <VueLoadingIcon v-if="loading" stroke="4" size="16" color="#fff" />
                <span>Verify</span>
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
