// Import a library to help create a component
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/header";

// Create component

const App = () => <Header headerText={"Albums!"} />;

// REnder it to the device
AppRegistry.registerComponent("albums", () => App);
