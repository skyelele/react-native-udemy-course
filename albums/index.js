// Import a library to help create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

// Create component

const App = () => (
  <View>
    <Header headerText={"Albums!"} />
    <AlbumList />
  </View>
);

// REnder it to the device
AppRegistry.registerComponent("albums", () => App);
