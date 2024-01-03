
<script setup>

const formView = ref('login');
const message = ref('');
const errorMessage = ref('');

const login = async () => {
    console.log("login")
};

const handleFormSubmit = async () => {
    console.log("Register")
};

const resetPassword = async () => {
    console.log('reset password')
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
    <div class="max-w-lg mx-auto my-16 min-h-[600px] lg:my-24">
        <div class="flex flex-col items-center">
            <Logo class="mb-6 scale-125" />
            <h1 class="text-xl font-semibold lg:text-3xl">Login To account</h1>
            <div v-if="formView == 'login'" class="my-2 text-center">
                No account
                <a class="font-semibold cursor-pointer text-primary" @click="formView = 'register'">
                    Account register</a>.
            </div>
            <div v-if="formView == 'register'" class="my-2 text-center">
                Has account?
                <a class="font-semibold cursor-pointer text-primary" @click="formView = 'login'">
                    Please login </a>.
            </div>

        </div>
        <form class="mt-6" @submit.prevent="handleFormSubmit(userInfo)">
            <label v-if="formView == 'register' || formView == 'forgotPassword'" for="email"> Email
                <span span class="text-red-500">* </span> <br />
                <input id="email" placeholder="Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required />
            </label>
            <p v-if="formView == 'forgotPassword'" class="text-sm text-gray-500"> Please enter
                your email
                address and we will
                send you a link to reset your password.</p>
            <div div v-if="formView != 'forgotPassword'">
                <label for="username"> username <span class="text-red-500">*</span> <br />
                    <input id="username" placeholder="Username" type="text" required />
                </label>
                <label for="password">Password <span class="text-red-500">*</span> <br />
                    <VuePasswordInput id="password" class="mb-4" className="border rounded-lg w-full p-3 px-4 bg-white"
                        placeholder="Password" :required="true" />
                </label>
            </div>
            <Transition name="scale-y" mode="out-in">
                <div v-if="message" class="my-4 text-sm text-green-500" v-html="message">
                </div>
            </Transition>
            <Transition name="scale-y" mode="out-in">
                <div v-if="errorMessage" class="my-4 text-sm text-red-500" v-html="errorMessage"></div>
            </Transition>
            <button class="flex items-center justify-center gap-4 mt-4 text-lg">
                <LoadingIcon v-if="isPending" stroke="4" size="16" color="#fff" />
                <span>{{ buttonText }}</span>
            </button>
        </form>
        <div class="my-8 text-center cursor-pointer" @click="formView = 'forgotPassword'" v-if="formView == 'login'">
            Forgot
            password?</div>
        <div class="my-8 text-center cursor-pointer" @click="formView = 'login'" v-if="formView == 'forgotPassword'">
            Back to
            login</div>
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
