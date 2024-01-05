import query from '../queries/get/get-cart.gql'
export function useCart() {
  const currentUser = useCurrentUser();
  const cart = useState('cart');
  const isShowingCart = useState('isShowingCart', () => false);
  const isUpdatingCart = useState('isUpdatingCart', () => false);
  const isUpdatingCoupon = useState('isUpdatingCoupon', () => false);
  const paymentGateways = useState('paymentGateways', () => []);

  async function refreshCart() {
    try {
      const { cart: fetchedCart, customer, viewer, paymentGateways: fetchedPaymentGateways } = await GqlGetCart();

      const { updateCustomer, updateViewer } = useAuth();
      if (fetchedCart) updateCart(fetchedCart);
      if (customer) updateCustomer(customer);
      if (viewer) updateViewer(viewer);
      if (fetchedPaymentGateways) updatePaymentGateways(fetchedPaymentGateways.nodes);

      return fetchedCart;
    } catch (error) {
      console.error(error);
    }

    return null;
  }

  async function getCart() {
    console.log(currentUser.value.id, "idddddd")
  const { data, error } = await useLazyAsyncQuery(query, { user_id: currentUser.value.id })
    if (error.value) {
      console.log("carti eroro", error.value)
      throw new Error('Cannot fetch cart')
    } else {
      console.log("cartii",data)
      return data.value
    }
          
}


  function updateCart(payload) {
    cart.value = payload;
  }

  function updatePaymentGateways(payload) {
    paymentGateways.value = payload;
  }

  function toggleCart(state = undefined) {
    isShowingCart.value = state ?? !isShowingCart.value;
  }

  async function addToCart(input) {
    isUpdatingCart.value = true;

    try {
      const { addToCart: response } = await GqlAddToCart({ input });
      cart.value = response?.cart ?? null;
    } catch (error) {
      const errorMessage = error?.gqlErrors?.[0]?.message;
      if (errorMessage) console.error(errorMessage);
    }
  }

  async function removeItem(key) {
    isUpdatingCart.value = true;
    const { updateItemQuantities } = await GqlUpDateCartQuantity({ key, quantity: 0 });
    cart.value = updateItemQuantities?.cart ?? null;
  }

  async function updateItemQuantity(key, quantity) {
    isUpdatingCart.value = true;
    try {
      const { updateItemQuantities } = await GqlUpDateCartQuantity({ key, quantity });
      cart.value = updateItemQuantities?.cart ?? null;
      return quantity;
    } catch (error) {
      const errorMessage = error?.gqlErrors?.[0]?.message;
      if (errorMessage) {
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      throw new Error('An unknown error occurred while updating item quantity');
    }
  }

  async function emptyCart() {
    try {
      const { emptyCart: response } = await GqlEmptyCart();
      cart.value = response?.cart ?? null;
    } catch (error) {
      const errorMessage = error?.gqlErrors?.[0]?.message;
      if (errorMessage) console.error(errorMessage);
    }
  }

  async function updateShippingMethod(shippingMethods) {
    isUpdatingCart.value = true;
    const { updateShippingMethod: response } = await GqlChangeShippingMethod({ shippingMethods });
    cart.value = response?.cart ?? null;
  }

  async function applyCoupon(code) {
    try {
      isUpdatingCoupon.value = true;
      const { applyCoupon: response } = await GqlApplyCoupon({ code });
      cart.value = response?.cart ?? null;
      isUpdatingCoupon.value = false;
    } catch (error) {
      isUpdatingCoupon.value = false;
      const gqlErrors = error?.gqlErrors;
      if (gqlErrors) {
        const message = gqlErrors[0]?.message;
        if (message) return { message };
      }
    }
    return { message: null };
  }

  async function removeCoupon(code) {
    try {
      const { removeCoupons: response } = await GqlRemoveCoupons({ codes: [code] });
      cart.value = response?.cart ?? null;
    } catch (error) {
      console.error(error);
    }
  }

  watch(cart, (val) => {
    isUpdatingCart.value = false;
  });

  return {
    getCart,
    cart,
    isShowingCart,
    isUpdatingCart,
    isUpdatingCoupon,
    paymentGateways,
    updateCart,
    refreshCart,
    toggleCart,
    addToCart,
    removeItem,
    updateItemQuantity,
    emptyCart,
    updateShippingMethod,
    applyCoupon,
    removeCoupon,
  };
}
