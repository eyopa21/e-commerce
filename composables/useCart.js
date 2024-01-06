import query from "../queries/get/get-cart.gql";
import remove_query from "../queries/delete/clear-cart.gql";
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
    console.log("test", result)

    
    if (error.value) {
      console.log("carti eroro", error.value);
      throw new Error("Cannot fetch cart");
    } else {

      
   
      currentUser.value.cart = result?.carts;
      return result?.carts;
    }
    
  }

  async function clearCart() {
    const { mutate: deleteCart } = useMutation(remove_query);
    loading.value = true;

    try {
      await deleteCart({ user_id: currentUser.value.id });
      await getCart()
      loading.value = false;
    } catch (err) {
      console.log(err);
      loading.value = false;
      throw new Error("Cannot remove cart");
    }
  }

  return {
    clearCart,
    getCart,
    loading,
  };
}
