import "./index.css";
import React from "react";
import { render } from "react-dom";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./reducers/counterReducer";
import { itemReducer } from "./reducers/itemReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  item: itemReducer
});

const initialState = {
  counter: {
    count: 5
  },
  item: {
    items: [],
    loading: false,
    error: null
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

const App = () => (
  <Provider store={store}>
    <Counter />
    <br />
    <ItemList />
  </Provider>
);

render(<App />, document.getElementById("root"));
