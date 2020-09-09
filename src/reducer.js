export const initialState = {
  subTotal: 0,
  basket: [],
  echoProducts: [
    {
      name: "Echo dot (3rd Gen)",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg",
      rating: 5,
    },
    {
      name: "Echo Plus (2nd Gen)",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SX679_.jpg",
      rating: 5,
    },
    {
      name: "Echo Input",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61qIcidztUL._SX522_.jpg",
      rating: 5,
    },
    {
      name: "Echo Show 8",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UZ17lvVFL._SX679_.jpg",
      rating: 5,
    },
  ],
  mobileProducts: [
    {
      name: "iphone 11 pro max (256GB)",
      price: 1200,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81j2j9x-KWL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Galaxy Note 20 Ultra",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71LanCZhSWL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Pixel 4a",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Sony Xperia 1 II",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81XbJvP97%2BL._AC_SX679_.jpg",
      rating: 5,
    },
  ],
  laptopProducts: [
    {
      name: "Macbook Pro 16",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Dell XPS 17 9700",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81eAalLexmL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "Razer Blade 17 Pro",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61CsIN1%2ByaL._AC_SX679_.jpg",
      rating: 5,
    },
    {
      name: "ROG zephyrus S17",
      price: 100,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61DwoC79tWL._AC_SX679_.jpg",
      rating: 5,
    },
  ],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
