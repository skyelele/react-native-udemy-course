import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
