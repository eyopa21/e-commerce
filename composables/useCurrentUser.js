export default function () {
  return useState("data", () => {
    return {
      
      isVerified: false,
      id: null,
      currentUser: null
    };
  });
}
