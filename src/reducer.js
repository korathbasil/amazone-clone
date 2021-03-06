export const initialState = {
  user: {
    email: null,
    displayName: null,
  },
  subTotal: 0,
  basket: [],
  echoProducts: [
    {
      name: "Echo dot (3rd Gen)",
      price: 79,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg",
      rating: 4,
    },
    {
      name: "Echo Plus (2nd Gen)",
      price: 84,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SX679_.jpg",
      rating: 4,
    },
    {
      name: "Echo Input",
      price: 89,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61qIcidztUL._SX522_.jpg",
      rating: 3,
    },
    {
      name: "Echo Show 8",
      price: 109,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UZ17lvVFL._SX679_.jpg",
      rating: 5,
    },
  ],
  mobileProducts: [
    {
      name: "Apple iphone 11 pro max",
      price: 1200,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81j2j9x-KWL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Galaxy Note 20 Ultra",
      price: 1099,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71LanCZhSWL._AC_SX679_.jpg",
      rating: 4,
    },
    {
      name: "Pixel 4a",
      price: 349,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Sony Xperia 1 II",
      price: 1064,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81XbJvP97%2BL._AC_SX679_.jpg",
      rating: 5,
    },
  ],
  laptopProducts: [
    {
      name: "Macbook Pro 16",
      price: 3299,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Dell XPS 17 9700",
      price: 3999,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81eAalLexmL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Razer Blade 17 Pro",
      price: 3050,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61CsIN1%2ByaL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "ROG zephyrus S17",
      price: 2926,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61DwoC79tWL._AC_SX679_.jpg",
      rating: 5,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state,
          email: action.email,
          displayName: action.displayName,
        },
      };
    case "ADD_TO_CART":
      return {
        ...state,
        subTotal: state.subTotal + action.item.price,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      const arr = state.basket;
      arr.splice(action.index, 1);
      return {
        ...state,
        basket: arr,
        subTotal: state.subTotal - action.price,
      };
    default:
      return state;
  }
};
