import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDmE6mP0IKM56-WpoIWRC1ecvE1d9A8arw",
      authDomain: "authentication-9fc0e.firebaseapp.com",
      databaseURL: "https://authentication-9fc0e.firebaseio.com",
      projectId: "authentication-9fc0e",
      storageBucket: "authentication-9fc0e.appspot.com",
      messagingSenderId: "283082959645"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
