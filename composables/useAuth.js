export const useAuth = () => {
  const { onLogin, onLogout, getToken } = useApollo()
  const { refreshCart } = useCart();

  const customer = useState('customer', () => ({ billing: {}, shipping: {} }));
  const viewer = useState('viewer', () => null);
  const isPending = useState('isPending', () => false);
  const orders = useState('orders', () => null);
  const user = useState('user', () => ({isVerified: false, id: null,  user: null}));

  const loginUser = async (credentials) => {
    isPending.value = true;

    try {
      const { loginWithCookies } = await GqlLogin(credentials);

      if (loginWithCookies?.status === 'SUCCESS') {
        const cart = await refreshCart();
        if (cart && viewer.value === null) {
          return { success: false, error: 'Password was correct, but there was an error logging in. Please try again later. If the problem persists, please contact support.' };
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

  const logoutUser = async () => {
    const { clearAllCookies } = useHelpers();
    isPending.value = true;
    try {
      const { logout } = await GqlLogout();
      if (logout) {
        isPending.value = false;
        await refreshCart();
        clearAllCookies();
        viewer.value = null;
        customer.value = { billing: {}, shipping: {} };
      }
      return { success: true, error: null };
    } catch (error) {
      isPending.value = false;
      return { success: false, error };
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
 
const testAuth = async() => {
  
const tok = await getToken();
return {tok};
}

  return {
    viewer,
    customer,
    isPending,
    orders,
    loginUser,
    updateCustomer,
    updateViewer,
    logoutUser,
    registerUser,
    sendResetPasswordEmail,
    getOrders,
    testAuth
  };
};
