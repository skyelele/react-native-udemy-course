import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: [prop, value]
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop({ type: "reset" });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    // Starts up event handler to
    // refer to employee database
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      // snapshot is called ANY TIME
      // new data is called

      // ANytime new values are added
      // to the database, the type
      // is dispatched with the payload
      // (the entire data in there)
      //
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
