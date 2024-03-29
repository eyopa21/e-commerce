/**
 * @name useWishlist
 * @description A composable that handles the wishlist in local storage
 */

export function useWishlist() {

  const theList = useState<Product[]>('wishlist', () => []);
  if (process.client) {
    getFromLocalStorage()
  }
  console.log("the list", theList.value)
  /**
   * Add an item to the list
   * @param {Product} item
   * @example addToWishlist({ databaseId: 123, name: 'My Product' })
   */
  function addToWishlist(item: Product): void {
    theList.value.push(item);
    localStorage.setItem('wishlist', JSON.stringify(theList.value));
    console.log("the list", theList.value)
  }

  /**
   * Remove an item from the list
   * @param {number} databaseId
   * @example removeFromWishlist(123) - Removes the product with the databaseId of 123
   */
  function removeFromWishlist(productId: number): void {
    theList.value = theList.value.filter((item) => {

      console.log("the titehehehhe", item)
      item.id !== productId
    });
    localStorage.setItem('wishlist', JSON.stringify(theList.value));
  }

  // Check if an item is in the list
  function isInList(productId?: number): boolean {
    return productId ? theList.value.some((item) => item.id === productId) : false;
  }

  // Check if the list is empty
  function isEmpty(): boolean {
    return theList.value.length === 0;
  }

  // Get the list from local storage
  function getFromLocalStorage(): void {
    const wishlist = localStorage.getItem('wishlist');
    if (wishlist) theList.value = JSON.parse(wishlist);
  }

  // Clear the list from local storage
  function clearWishlist(): void {
    theList.value = [];
    localStorage.removeItem('wishlist');
  }

  onMounted(() => {
    getFromLocalStorage();
  });

  return { theList, addToWishlist, removeFromWishlist, isInList, isEmpty, clearWishlist };
}
