import React, { Component } from "react";
import "./App.css";
import Cockpit from "./components/Cockpit/cockpit";
import AuthContext from  "./components/Context/is_authenticate"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: "0", name: "John", age: 20 },
        { id: "1", name: "Max", age: 12 },
        { id: "2", name: "Roger", age: 43 },
        { id: "3", name: "AJ", age: 40 },
        { id: "4", name: "Sam", age: 31 },
        { id: "5", name: "Joseph", age: 43 },
        { id: "6", name: "Josephine", age: 1 },
        { id: "7", name: "Mark", age: 97 },
      ],
      toogleDisplay: false,
      isAuthenticated: false,
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Getting Derived State: ", props);
    return state;
  }

  componentDidMount() {
    console.log("Component Mounted Successfully!!!");
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((resp) => resp.json())
      .then((joke) => console.log(joke));
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update:", prevProps, prevState);
    return {message:"Components' Snapshot Taken Successfully"};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Get  Update:", prevProps, prevState);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((resp) => resp.json())
      .then((joke) => console.log(joke));

      console.log(snapshot)
  }

  componentWillUnmount(){
    console.log("Component Unmounted!!!")
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => p.id === index);
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  editNameHandler = (index, e) => {
    console.log("Name Handler Entered ")
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => p.id === index);
    const NewName = e.target.value;
    persons[personIndex].name = NewName;
    console.log(persons)
    this.setState({ persons: persons });
    
  };

  loginHandler =() => {
    this.setState({isAuthenticated:true})
  }
  toogleDisplayHandler = () => {
    this.setState({ toogleDisplay: !this.state.toogleDisplay });
  };

  render() {
    console.log("Render");
    return (
      <div className="app">
        <AuthContext.Provider value={{is_authenticated:this.state.isAuthenticated,loginHandler:this.loginHandler}}>
          <h1 align="center">REACT</h1>

          <Cockpit
            persons={this.state.persons}
            delete={this.deletePersonHandler}
            edit={this.editNameHandler}
            toggle={this.toogleDisplayHandler}
            display={this.state.toogleDisplay}
          />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
