import React from "react";
import { Component } from "react";
import Person from "./Person/person";
import Wrap from "../hoc/Wrap";


class Persons extends Component {


  render() {
    return this.props.persons.map((a) => (
      <Person
        delete={() => this.props.delete(a.id)}
        edit={(e) => this.props.edit(a.id, e)}
        name={a.name}
        age={a.age}
        key={a.id}
      />
    ));
  }
}

export default Wrap(Persons, "App");
