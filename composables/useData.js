export default function () {
  return useState("data", () => {
    return {
      
      products: '',
      categories: '',
      agg: null
    };
  });
}
