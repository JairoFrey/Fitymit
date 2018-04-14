import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Capture from "../Images/Capture.PNG";
import axios from 'axios';
import queryString from 'query-string';

class Auth extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {firstName:"FN", headline:"Title"};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        const params = queryString.parse(this.props.location.search);
        this.setState({
            uid : params.uid
          });
    }
    componentDidMount(){
        axios.get("http://localhost:3001/profiledata?uid=" + this.state.uid)
        .then(function (response) {
            const newState = {
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                location : response.data.location.name,
                headline : response.data.headline,
                pictureUrl : response.data.pictureUrl,
                industry  : response.data.industry,
                email : response.data.emailAdress,
            };
            this.setState(newState)
            console.log(response);
        }.bind(this))
        .catch(function (error) {
            console.log(error);
          });
    }   

    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/api/submit', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
            industry: this.state.industry,
            headline: this.state.headline,
            pictureUrl: this.state.pictureUrl,
            email: this.state.email
        })
        .then(function (response) {
          console.log(response);
          alert("Your profile will be reviewed")
        })  
        .catch(function (error) {
          console.log(error);
        });
      }

      handleInputChange(e) {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = e.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
        });
      }


    render(){   

        return (
            <div>

                <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>
                <img src = {this.state.pictureUrl} ></img>
                <p>Please verify the information below is correct and press Submit if correct.  If incorrect, please hit cancel and manually submit your information.</p>
                <ul>
                    <li>Location: {this.state.location}</li>
                    <li>Industry: {this.state.industry}</li>
                    <li>Headline: {this.state.headline}</li>
                </ul>
        
                <input type="submit" onClick={this.handleSubmit} />
                <a href="http://localhost:3000/create"><button>Cancel</button></a>
            </div>
        )
    }
}

export default Auth;

