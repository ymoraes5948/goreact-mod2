import React, { Component } from "react";
import { Container, Form } from "./styles";

import logo from "../../assets/logo.png";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositories: []
  };
  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form>
          <input type="text" placeholder="usuário/repositório" />
          <button type="submit">ok</button>
        </Form>
        <CompareList />
      </Container>
    );
  }
}
