export default defineNuxtRouteMiddleware((to, from) => {
   const currentUser = useCurrentUser()
    const isLoggedIn = useCookie('isLoggedIn')
  
    console.log(isLoggedIn.value, to.name)
        
    const is_verified = ref(currentUser.value.isVerified)

    console.log(is_verified.value, "verif")

    if ((to.name === 'auth-login' || to.name === 'auth-forgot' || to.name === 'auth-register') && isLoggedIn.value) {
        return navigateTo('/');
    }
    if ((  to.name === 'my-account') && !isLoggedIn.value ) {

        return navigateTo("/auth/login");
    }
    if ((  to.name === 'my-account') && (isLoggedIn.value && !is_verified.value) ) {
        console.log("auth why")
      //  return navigateTo("/auth/verify");
    }
    if ((  to.name === 'auth-verify') & (is_verified.value === null)) {
        return navigateTo('/auth/login')
    }
    if ((  to.name === 'auth-verify') & (is_verified.value)) {
        return navigateTo('/')
    }
    if ((  to.name === 'checkout') & (!currentUser.value.cart)) {
        return navigateTo('/')
    }
    
    /*
    if (from.name === 'auth-verify' && !is_verified.value) {
        return navigateTo("/auth/verify");
    }
    if (to.name === 'auth-verify' && is_verified.value) {
        return navigateTo("/");
    }
    if (isLoggedIn.value && !is_verified.value) {
         return navigateTo("/auth/verify");
    }
*/
});