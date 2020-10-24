import React from "react";
import Persons from "../Persons/persons";
import Wrap from '../hoc/Wrap';
import { useRef } from "react";
import { useEffect } from "react";
import Authenticate from "../Context/is_authenticate";
import { useContext } from "react";


const Cockpit = (props) => {

  let clickbtn = useRef(null);

  useEffect(()=>{
    clickbtn.current.click();

  },[])

  let cont = useContext(Authenticate)

  const toggleStyle = {
    backgroundColor: "green",
    border: "none",
    padding: "10px",
    color: "white",
    cursor: "pointer",
  };

  if (props.display) {
    toggleStyle.backgroundColor = "red";
  }

  let check = null;
  

  props.display ? check= true : check=false

  return (
    <div className="App">
      <button ref={clickbtn} onClick={props.toggle} style={toggleStyle}>
        TOOGLE DISPLAY
      </button>
      
        <button onClick={cont.loginHandler} style={toggleStyle}>
          Login
        </button>
     

      {console.log("PROPS DISPLAY:", props.display)}

      {props.display === true ? (
        <div
          className="persons"
          style={{
            display: "grid",
            gridGap: "20px",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          <Persons
            persons={props.persons}
            delete={props.delete}
            edit={props.edit}
          />
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Cockpit);
