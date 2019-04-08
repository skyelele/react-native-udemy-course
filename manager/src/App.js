import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "./reducers";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBGiT7UcYYDa_nNv4aB0y9Yxa_cCJz9JEM",
      authDomain: "manager-f5289.firebaseapp.com",
      databaseURL: "https://manager-f5289.firebaseio.com",
      projectId: "manager-f5289",
      storageBucket: "manager-f5289.appspot.com",
      messagingSenderId: "1046232271539"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
