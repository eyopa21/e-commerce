

import filter_by_category_query from '../queries/filters/filter_by_category.gql'


export function useFiltering() {
  const route = useRoute();
  const router = useRouter();
  const runtimeConfig = useRuntimeConfig();
  const layout = useLayout();
  const mainData = useData();
  const filterQuery = useState('filter', () => '');

  filterQuery.value = route.query.filter;

  function getFilter(filterName) {
    return (filterQuery.value?.split(`${filterName}[`)[1]?.split(']')[0]?.split(',')) || [];
  }

  function setFilter(filterName, filterValue) {
    let newFilterQuery = filterQuery.value || '';
console.log("filter query", filterQuery.value)
    if (!filterQuery.value || !filterQuery.value.includes(filterName)) {
      newFilterQuery = filterQuery.value ? `${filterQuery.value},${filterName}[${filterValue}]` : `${filterName}[${filterValue}]`;
    } else {
      newFilterQuery = !filterValue.length
        ? filterQuery.value.replace(`${filterName}[${getFilter(filterName)}]`, '')
        : filterQuery.value.replace(`${filterName}[${getFilter(filterName)}]`, `${filterName}[${filterValue}]`);
    }

    newFilterQuery = newFilterQuery.replace(/^,/, '').replace(/,$/, '');
    newFilterQuery = newFilterQuery.replace(/,{2,}/g, ',');

    filterQuery.value = newFilterQuery;

    router.push({ query: { ...route.query, filter: newFilterQuery } });

    const path = route.path.includes('/page/') ? route.path.split('/page/')[0] : route.path;

    if (!newFilterQuery) {
      router.push({ path, query: { ...route.query, filter: undefined } });
    } else {
      router.push({ path, query: { ...route.query, filter: newFilterQuery } });
    }

    setTimeout(() => {
      // updateProductList();
    }, 50);
  }

  function resetFilter() {
    const { scrollToTop } = useHelpers();
    filterQuery.value = '';
    router.push({ query: { ...route.query, filter: undefined } });

    setTimeout(() => {
      // updateProductList();
      scrollToTop();
    }, 50);
  }

    const isFiltersActive = computed(() => !!filterQuery.value);

  async function filterByCategory(value) {
    try {
      
      await setFilter('category', value)
      console.log("vall", value)
      const { onResult, onError, loading } =  useQuery(filter_by_category_query, {categories: value})
      layout.value.isFiltering = loading
      onResult(res => {
        console.log("result", res.data)
        mainData.value.products = res.data?.products;
      })
      onError(err => {
        console.log("erororor", err)
      })
    } catch (error) {
      console.log("filter by category error", error)
    }
}


  return {filterByCategory, getFilter, setFilter, resetFilter, isFiltersActive };
}
