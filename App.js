import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./src/reducers";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business",
    },
  }
);

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
