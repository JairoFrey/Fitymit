import React, { Component } from "react";
import Container from "../components/Container";
import API from "../utils/API";

class Create extends Component {

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Become a Mentor</h1>
        <form>
        <label>Username<input type = "text" name = "username" /></label>
        <label>Email<input type = "text" name = "email" /></label>
        <label>Phone<input type = "text" name = "phone" /></label>
        <label>Occupation<input type = "text" name = "occupation" /></label>
        <label>Comments<input type = "text" name = "comments" /></label>
        </form>
      </Container>
    );
  }
}

export default Create;
