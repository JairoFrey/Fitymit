import React, { Component } from "react";
import Container from "../components/Container";
import axios from 'axios';

class Create extends Component {
  constructor(){
    super();
    this.state = {data: {}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = e.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("username: " + this.state.username)
    axios.post('http://localhost:3001/api/submit', {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      occupation: this.state.occupation,
      comments: this.state.comments
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>  
        <h1 className="text-center">Become a Mentor</h1>
        <form>
        <label>Username<input type = "text" name = "username" placeholder = "Input Your Name" onChange={this.handleInputChange} value={this.state.username} /></label>
        <label>Email<input type = "text" name = "email" placeholder = "Input Your Email" onChange={this.handleInputChange} value={this.state.email}/></label>
        <label>Phone<input type = "text" name = "phone" placeholder = "Input Your Phone Number" onChange={this.handleInputChange} value={this.state.phone}/></label>
        <label>Occupation<input type = "text" name = "occupation" placeholder = "Input Your Job Title" onChange={this.handleInputChange} value={this.state.occupation}/></label>
        <label>Comments<input type = "text" name = "comments" placeholder = "Please write a short bio" onChange={this.handleInputChange} value={this.state.comments}/></label>
        <input type="submit" onClick={this.handleSubmit} />
        </form>
      </Container>
    );
  }
}

export default Create;
