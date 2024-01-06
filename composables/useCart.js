import query from "../queries/get/get-cart.gql";
import remove_query from "../queries/delete/clear-cart.gql";
const { mutate: GetCart, onDone, onError, loading } = useMutation(query);
export function useCart() {
  const currentUser = useCurrentUser();
  const loading = useState("cartLoading", () => false);

  async function getCart() {
    console.log(currentUser.value.id, "idddddd");
    //GetCart({user_id: currentUser.value.id})

    loading.value = true;
    const { data, error } = await useAsyncQuery(query, {
      user_id: currentUser.value.id,
    });
    if (error.value) {
      loading.value = false;
      console.log("carti eroro", error.value);
      throw new Error("Cannot fetch cart");
    } else {
      loading.value = false;
      currentUser.value.cart = data.value?.carts;
      return "fetch done";
    }
  }
 

  async function clearCart() {
    const { mutate: deleteCart } = useMutation(remove_query)
    loading.value = true;
    
    try {
      const res = await deleteCart({ user_id: currentUser.value.id })
      getCart()
       loading.value = false;
    } catch (err) {
      console.log(err)
       loading.value = false;
      throw new Error('Cannot remove cart')
    }
  }
  
  return {
    clearCart,
    getCart,
    loading
  };
}
