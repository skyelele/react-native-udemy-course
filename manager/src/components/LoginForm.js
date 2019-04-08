import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged } from "../actions";
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        <CardSection />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    // enables you to access state.auth.email
    // by using the code
    // "this.props.email"
    email: state.auth.email
  };
};

export default connect(
  mapStateToProps,
  { emailChanged }
)(LoginForm);
