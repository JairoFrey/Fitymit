import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//class dropDown makes the drop down button work properly
  export default class dropDown extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
    }
  
    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  //renders the page
    render() {
      return (
      <div>      
        <h1 className="text-center"
            style={{ fontSize: 75, padding: 150 }}
        >Meet a Mentor!</h1>
        <br></br><br></br><br></br>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret size="md"
              style={{ marginLeft:10 }}
      >
            Search By Industry
          </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Another Industry</DropdownItem>
              <DropdownItem>Another Industry</DropdownItem>
              <DropdownItem>Another Industry</DropdownItem>
              <DropdownItem>Another Industry</DropdownItem>              
            </DropdownMenu>
      </ButtonDropdown>
      <br></br><br></br>
        <Row>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody >
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    <br></br>
    <Row>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="3">
      <Card className="card"
            style={{ border:"solid", padding:10, margin:10 }}
      >
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Name</CardTitle>
          <CardSubtitle>Job Title</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>MEET ME</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    </div>
    );
  }
}


