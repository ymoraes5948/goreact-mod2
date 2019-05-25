import React, { Component } from "react";
import moment from "moment";
import api from "../../services/api";

import { Container, Form } from "./styles";

import logo from "../../assets/logo.png";
import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  handleRepository = async e => {
    e.preventDefault();

    try {
      const { data: repository } = await api.get(
        `repos/${this.state.repositoryInput}`
      );

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleRepository}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">ok</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
