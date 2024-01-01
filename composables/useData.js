export default function () {
  return useState("data", () => {
    return {
      foods: [
        {
          id: 1,
          name: "Margherita",
          toppings: ["Tomato Sauce", "Mozzarella", "Fresh Basil"],
          price: 10.99,
          amount: 0
        },
        {
          id: 2,
          name: "Pepperoni",
          toppings: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
          price: 12.99,
          amount: 0
        },
        {
          id: 3,
          name: "Vegetarian",
          toppings: [
            "Tomato Sauce",
            "Mozzarella",
            "Bell Peppers",
            "Onions",
            "Olives",
          ],
          price: 11.99,
          amount: 0
        },
        {
          id: 4,
          name: "BBQ Chicken",
          toppings: [
            "BBQ Sauce",
            "Mozzarella",
            "Grilled Chicken",
            "Red Onions",
          ],
          price: 13.99,
          amount: 0
        },
        {
          id: 5,
          name: "Hawaiian",
          toppings: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
          price: 12.49,
          amount: 0
        },
      ],
      foodDetail: '',
      cart: []
    };
  });
}
