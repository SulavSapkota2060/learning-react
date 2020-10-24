import React from 'react'



const Validation =(props) => {
    let text = null;
    let style=null;
    if(props.length <=5){
      style = {color:"red"}
      text  = (
        <p>Text too short. length: {props.length}</p>
      )
    }else{
      style = {color:"green"}
      text  = (
        <p>Text long enough. length: {props.length}</p>
      )

    }
    return(
      <p style={style}>{text}</p>
    );
} 


export default Validation;