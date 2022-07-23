import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  productsReducer,
  productDetailReducer,
  newProductReducer,
  productReducer,
} from "./reducers/productReducer";
import { allUsersReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailReducer,
  user: userReducer,
  profile: profileReducer,
  newProduct: newProductReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  product: productReducer,

});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
