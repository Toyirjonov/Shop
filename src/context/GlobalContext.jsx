import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      // Bu yerini menga ChatGPT qilib berdi chunki menda id 'ni topalmayatodi shuning uchun Gpt ishlatdim
      if (!payload || !payload.id) {
        return state;
      }
      return { ...state, basket: [...state.basket, payload] };

    case "REMOVE_PRODUCT":
      const basketCopy = [...state.basket];
      const indexToRemove = basketCopy.findIndex(
        (product) => product.id === payload
      );
      if (indexToRemove !== -1) {
        basketCopy.splice(indexToRemove, 1);
      }
      return {
        ...state,
        basket: basketCopy,
      };

    case "REMOVE_ALL_PRODUCTS":
      return {
        ...state,
        basket: state.basket.filter((product) => {
          return payload !== product.id;
        }),
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case "SET_THEME":
      return { ...state, theme: payload };

    case "LOGIN":
      return {
        ...state,
        user: state.userData,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    basket: [],
    cart: [],
    theme: "light",
    user: null,
    userData: {
      DisplayName: "Admin",
      email: "admin@gmail.com",
      password: "aqaqaq",
      avatar:
        "https://e0.pxfuel.com/wallpapers/584/478/desktop-wallpaper-anime-music-anime-rap.jpg",
    },
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
