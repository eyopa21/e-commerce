import Search_query from '../queries/filters/search.gql'

export function useSearch() {
    const layout = useLayout();
    const mainData = useData();

  const searchLoading = ref(false);

  function search(searchValue) {
    const { onResult, onError, loading } = useQuery(
      Search_query,
      { search: "%" + searchValue + "%" },
      { fetchPolicy: "cache-and-network" }
      );
      layout.value.isFiltering = loading
    onResult((res) => {
       mainData.value.products = res.data?.products;
    });
    onError((err) => {
      console.log("searching failed", err)
    });
  }
  return {
    search,
  };
}
