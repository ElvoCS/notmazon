export const initialState = {
  basket: [],
  user: null,
};
//it is basically incrementing all prices in baset starting from 0
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

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
