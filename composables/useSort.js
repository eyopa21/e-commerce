import sort_query from "../queries/filters/sort.gql";
export function useSort() {

    const layout = useLayout();
    const mainData = useData();
  const sort = (value, order) => {
    console.log("sorting sort", value, order);

    const sortValue =
      value === "Latest"
        ? { created_at: order }
        : value === "Alphabetically"
        ? { title: order }
        : value === "Price"
        ? { price: order }
        : {};
    console.log(sortValue);
    const { onResult, onError, loading } = useQuery(
      sort_query,
      { sort: sortValue },
      { fetchPolicy: "no-cache" }
      );
      layout.value.isFiltering = loading
    onResult((res) => {
       
         mainData.value.products = res.data?.products;
    });
    onError((err) => {
      console.log(err);
    });
  };

  return {
    sort,
  };
}
