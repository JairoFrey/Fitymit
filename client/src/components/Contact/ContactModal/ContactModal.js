import React from "react";
import "./ContactModal.css";

const ContactModal = props => (
    
    <div>
    <div className="modal-overlay-div" onClick={e=>{
      e.stopPropagation();
      props.onOverlayClick();
      }}/>
    <div className="modal-content-div">
      <div className="modal-dialog-div">  
      <div className="form-group">
        <label>Full Name<input type = "text" name = "fullname" placeholder = "Input Your Full Name" /></label>
      </div>
      <div className="form-group">
        <label>Email<input type = "text" name = "email" placeholder = "Input Your Email"/></label>
        </div>
      <div className="form-group">
        <label>Mentor Name<input type = "text" name = "mentor" placeholder = "Name of Mentor You Wish to Contact"/></label>
        </div>
      <div className="form-group">
        <input type="submit" onClick={this.handleSubmit} />
      </div>
      <div className="form-group">
        <input type="submit" onClick={this.handleSubmit} class="Cancel" value="Cancel"/>
      </div>
      </div>
    </div>
  </div>
 
);

export default ContactModal;