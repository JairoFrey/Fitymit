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
                firstName : response.data.firstName
            };
            this.setState(newState)
            console.log(response);
        }.bind(this))
        .catch(function (error) {
            console.log(error);
          });
        // var o = this;
        // var uid = this.props.params.uid;
        // console.log("uid call in",   uid)
        // $.ajax("http://localhost:3001/profiledata?uid="+ uid).done(function (data) {
        //     o.setState(data);
        //     console.log(data);
        // })
    }   

    render(){

        return (
            <div>

                <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>

                <h4>{this.state.headline}</h4>

            </div>
        )
    }
}

export default Auth;
