import query from '../queries/get/get-current-user.gql'
export const useAuth = () => {
  const router = useRouter()
  const { onLogin, onLogout, getToken } = useApollo()
  const { refreshCart } = useCart();

  const customer = useState('customer', () => ({ billing: {}, shipping: {} }));
  const viewer = useState('viewer', () => null);
  const isPending = useState('isPending', () => false);
  const orders = useState('orders', () => null);
  const user = useState('user', () => ({ isVerified: false, id: null, user: null }));
  const currentUser = useCurrentUser();
  const loginUser = async (credentials) => {
    isPending.value = true;

    try {
      const { loginWithCookies } = await GqlLogin(credentials);

      if (loginWithCookies?.status === 'SUCCESS') {
        const cart = await refreshCart();
        if (cart && viewer.value === null) {
          return {
            success: false, error: 'Password was correct, but there was an error logging in. Please try again later. If the problem persists, please contact support.' };
}
        } else {
          isPending.value = false;
          return { success: false, error: loginWithCookies?.status };
        }
        return { success: true, error: null };
      } catch (error) {
        isPending.value = false;
        const gqlError = error?.gqlErrors?.[0];
        return { success: false, error: gqlError?.message };
      }
    };

    

    const registerUser = async (userInfo) => {
      isPending.value = true;
      try {
        await GqlRegisterCustomer({ input: userInfo });
        return { success: true, error: null };
      } catch (error) {
        const gqlError = error?.gqlErrors?.[0];
        isPending.value = false;
        return { success: false, error: gqlError?.message };
      }
    };

    const updateCustomer = (payload) => {
      const sessionToken = payload?.sessionToken;
      if (sessionToken) {
        useGqlHeaders({ 'woocommerce-session': `Session ${sessionToken}` });
        const newToken = useCookie('woocommerce-session');
        newToken.value = sessionToken;
      }
      customer.value = payload;
      isPending.value = false;
    };

    const updateViewer = (payload) => {
      viewer.value = payload;
      isPending.value = false;
    };

    const sendResetPasswordEmail = async (email) => {
      try {
        const { sendPasswordResetEmail } = await GqlResetPasswordEmail({ username: email });
        if (sendPasswordResetEmail?.success) {
          return { success: true, error: null };
        }
        return { success: false, error: 'There was an error sending the reset password email. Please try again later.' };
      } catch (error) {
        const gqlError = error?.gqlErrors?.[0];
        return { success: false, error: gqlError?.message };
      }
    };

    const getOrders = async () => {
      try {
        const { customerData } = await GqlGetOrders();
        if (customerData) {
          orders.value = customerData.orders?.nodes ?? [];
          return { success: true, error: null };
        }
        return { success: false, error: 'There was an error getting your orders. Please try again later.' };
      } catch (error) {
        const gqlError = error?.gqlErrors?.[0];
        return { success: false, error: gqlError?.message };
      }
    };

    const isLoggedIn = useCookie('isLoggedIn');
    const myAuth = async () => {
      try {
        const token = await getToken();
        const claims = token ? await JSON.parse(atob(token?.split(".")[1])) :'';
        
        currentUser.value.id = claims?.uid
        const { data, error } = await useLazyAsyncQuery(query, { id: currentUser.value.id })
        if (error.value) {
          currentUser.value.id = null
          currentUser.value.currentUser = null
          isLoggedIn.value = null
          throw new Error('User not logged in')
        } else {
          
          console.log("wowowow", data.value)
          currentUser.value.id = data.value.users_by_pk.id
          currentUser.value.currentUser = data.value.users_by_pk;
          currentUser.value.isVerified = data.value.users_by_pk.is_verified
          if (!currentUser.value.isVerified) {
            console.log("not verified")
            router.push('/auth/verify')
          }
          isLoggedIn.value = true
          return 'User logged in';
        }
      } catch (error) {
        console.log("erororor", error)
        isLoggedIn.value = null
        throw new Error('User not logged in')
      }
  }
  

  const { clearAllCookies } = useHelpers();
  async function logout() {

    console.log("logoutting")
    isPending.value = true
    console.log("isPending", isPending.value)
    try {
       onLogout();
      currentUser.value.currentUser = null 
      currentUser.value.id = null
      currentUser.value.isVerified = null
       currentUser.value.cart = null
      clearAllCookies()
      isPending.value = false
      router.push('/auth/login')
    } catch (err) {
      isPending.value = false
      console.log("err")
      throw new Error('cannot logout')
    }
  }

    return {
      viewer,
      customer,
      isPending,
      orders,
      loginUser,
      updateCustomer,
      updateViewer,
     
      registerUser,
      sendResetPasswordEmail,
      getOrders,
      myAuth,
      user, 
      logout
    };
  };