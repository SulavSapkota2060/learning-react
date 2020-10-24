import React from "react";
import "./person.css";
import PropTypes from 'prop-types'
import { Component } from "react";
import Authenticate from "../../Context/is_authenticate";

class Person extends Component {
constructor(props){
  super(props)
    this.buttonStyle = {
      background: "none",
      border: "none",
      color: "red",
      cursor: "pointer",
      textDecoration: "underline",
      marginTop: "5px",
    };

    this.inputElRef = React.createRef();
}
  static contextType = Authenticate;

componentDidMount(){
  this.inputElRef.current.focus()
}

  render(){
    
  return (
    <div className="card">
      
      
        {this.context.is_authenticated ? <p>Authenticated</p>: <p>Please Login</p>}
      
      <div className="details">
        <h3>{this.props.name}</h3>
        <p>I am {this.props.age} years old.</p>
      </div>
      <input
        ref={this.inputElRef}
        onChange={this.props.edit}
        value={this.props.name}
        type="text"
      />
      <button onClick={this.props.delete} style={this.buttonStyle}>
        Delete
      </button>
    </div>
  );
  }

  
};


Person.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  edit:PropTypes.func,
  delete:PropTypes.func,
}

export default Person;
