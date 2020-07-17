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
      return { state };

    default:
      return state;
  }
};

export default reducer;
