import query from "../queries/get/get-cart.gql";
import clear_query from "../queries/delete/clear-cart.gql";
import remove_query from "../queries/delete/remove-cart-item.gql";
import add_to_cart_query from "../queries/insert/add-to-cart.gql";
export function useCart() {
  const nuxtApp = useNuxtApp();
  const layout = useLayout();
  const currentUser = useCurrentUser();
  const loading = useState("cartLoading", () => false);
  //const { result, error, execute } =  useLazyAsyncQuery(query, {user_id: currentUser.value.id});
   const { load, refetch, error, loadin } = useLazyQuery(query, { user_id: currentUser.value.id }, { fetchPolicy: 'no-cache' })

  const totalSum  = ref(0)
  
  async function getCart() {
   

    loading.value = loadin;
    const result = await load()
    if (error.value) {
      console.log("cart fetch error", error.value);
     
      throw new Error("Cannot fetch cart");
    } else {
      
       result?.carts?.forEach(item => {
        // console.log("itemmm", item.quantity*item.product.price)
         totalSum.value+=item.quantity*item.product.price
      })
   
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
      totalSum.value = 0
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
      await getCart()
       layout.value.showAlert = {error: false, message: "Product added to Cart"}
    } catch (err) {
      console.log("reomve error", err)
      layout.value.showAlert = {error: true, message: "Cannot add to cart"}
      throw new Error("Cannot add to cart");
    }
  }

  return {
    totalSum,
    addToCart,
    removeItem,
    clearCart,
    getCart,
    loading,
  };
}
