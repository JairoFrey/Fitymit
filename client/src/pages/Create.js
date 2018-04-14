import React, { Component} from "react";
import Container from "../components/Container";
import axios from 'axios';
import Login from './Login';

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
    console.log("firstName: " + this.state.firstName)
    axios.post('http://localhost:3001/api/submit', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: this.state.location,
      industry: this.state.industry,
      headline: this.state.headline,
      pictureUrl: this.state.pictureUrl
    })
    .then(function (response) {
      console.log(response);
      alert("Your profile will be reviewed")
      window.location.replace("http://localhost:3000/")
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
          <fieldset>
            <legend>Please Enter Your Information</legend>
            <div class="form-group row">
              <label>firstName<input type = "text" name = "firstName" placeholder = "Input Your Name" onChange={this.handleInputChange} value={this.state.firstName} /></label>
            </div>
            <div class="form-group row">
              <label>lastName<input type = "text" name = "lastName" placeholder = "Input Your lastName" onChange={this.handleInputChange} value={this.state.lastName}/></label>
            </div>      
            <div class="form-group row">
              <label>location<input type = "text" name = "location" placeholder = "Input Your location Number" onChange={this.handleInputChange} value={this.state.location}/></label>
            </div>
            <div class="form-group row">
              <label>industry<input type = "text" name = "industry" placeholder = "Input Your Job Title" onChange={this.handleInputChange} value={this.state.industry}/></label>
            </div>
            <div class="form-group row">
              <label>headline<input type = "text" name = "headline" placeholder = "Please write a short bio" onChange={this.handleInputChange} value={this.state.headline}/></label>
            </div>
            <div class="form-group row">
              <label>pictureUrl<input type = "text" name = "pictureUrl" placeholder = "Please write a short bio" onChange={this.handleInputChange} value={this.state.pictureUrl}/></label>
            </div>
            <input type="submit" onClick={this.handleSubmit} /> 
            </fieldset>
            <Login />
        </form>
      </Container>
    );
  }
}


export default Create;
