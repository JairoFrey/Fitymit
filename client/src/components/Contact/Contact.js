import React from "react";
// import { Link } from "react-router-dom";
import "./Contact.css";
import ContactModal from "./ContactModal";
// this will show the user name or a prompt to login based on if 
// you are logged in or not



class Contact extends React.Component { 
   
    constructor(props) {
        super(props);
        this.state = {LoggedOn: false};
        this.LogIn = this.LogIn.bind(this);
    }
    // this is a method and part of the object so you don't need the fat arrow and =
    LogIn () {
          this.setState({
            LoggedOn: !this.state.LoggedOn
          });
    }

    // CloseModal = () => {
    //     this.setState({LoggedOn: false})
    // }
        
        render() {
        return(
        <div>
        <button onClick={this.LogIn} className="btn-lg btn-round pull-right" id="Login">
        Mentor Login</button>
        {this.state.LoggedOn ? <ContactModal onOverlayClick={() => this.setState({LoggedOn: false})}/>: null}
        </div>
        )}
    // if (LoggedOn === true) {
    //     render() {
    //         <div>
    //             {LoginModal};   
    //         </div>
    //     }
    // }
} 
   

export default Contact;