import query from "../queries/get/get-cart.gql";
import clear_query from "../queries/delete/clear-cart.gql";
import remove_query from "../queries/delete/remove-cart-item.gql";
import add_to_cart_query from "../queries/insert/add-to-cart.gql";
export function useCart() {
  const nuxtApp = useNuxtApp();
  const currentUser = useCurrentUser();
  const loading = useState("cartLoading", () => false);
  //const { result, error, execute } =  useLazyAsyncQuery(query, {user_id: currentUser.value.id});
   const { load,refetch, error, loadin } =  useLazyQuery(query, { user_id: currentUser.value.id }, { fetchPolicy: 'no-cache' })
  async function getCart() {
    /*
    const {
      onResult,
      onError,
      loading: loadin,
      refetch,
    } = useQuery(query, { user_id: currentUser.value.id });
    nuxtApp.provide("cartRefetch", () => {
      console.log("refteching");
      refetch();
    });
    loading.value = loadin;
    onResult((res) => {
      console.log("res", res.data?.carts);
      currentUser.value.cart = res.data?.carts;
      return res.data?.carts;
    });
    onError((err) => {
      throw new Error("Cannot fetch cart");
    });
    */
   

    loading.value = loadin;
    const result = await load()
    if (error.value) {
      console.log("cart fetch error", error.value);
      throw new Error("Cannot fetch cart");
    } else {

      
   
      currentUser.value.cart = result?.carts;
      return result?.carts;
    }
    
  }

  async function clearCart() {
    const { mutate: DeleteCart, loading:loadin } = useMutation(clear_query);
    loading.value = loadin;

    try {
      await DeleteCart({ user_id: currentUser.value.id });
      await getCart()
    } catch (err) {
      console.log(err);
      throw new Error("Cannot Clear cart");
    }
  }


  async function removeItem(id) {
    console.log("idd",id)
    const { mutate: RemoveItem, loading: loadin } = useMutation(remove_query);
     loading.value = loadin;
    try {
      await RemoveItem({ id: id })
      await getCart()
    } catch (err) {
      console.log("reomve error", err)
      throw new Error("Cannot remove cart");
    }
  }

  async function addToCart(productID, quantity) {
    console.log(productID, "pro ID", quantity)
  const { mutate: AddToCart, loading: loadin } = useMutation(add_to_cart_query);
     loading.value = loadin;
    try {
      await AddToCart({user_id: currentUser.value.id, product_id: productID, quantity: quantity})
      //await getCart()
    } catch (err) {
      console.log("reomve error", err)
      throw new Error("Cannot remove cart");
    }
  }

  return {
    addToCart,
    removeItem,
    clearCart,
    getCart,
    loading,
  };
}
