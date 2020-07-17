export const initialState = {
  basket: [
    {
      id: 121,
      title: "Echo Dot (3rd gen)",
      price: 150.96,
      rating: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL160_SR160,160_.jpg",
    },
    {
      id: 121,
      title: "Echo Dot (3rd gen)",
      price: 150.96,
      rating: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL160_SR160,160_.jpg",
    },
    {
      id: 121,
      title: "Echo Dot (3rd gen)",
      price: 150.96,
      rating: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL160_SR160,160_.jpg",
    },
    {
      id: 121,
      title: "Echo Dot (3rd gen)",
      price: 150.96,
      rating: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL160_SR160,160_.jpg",
    },
  ],
  user: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket

      //here we cloned the basket
      let newBasket = [...state.basket];

      //here we check to see if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product ${action.id}`);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
