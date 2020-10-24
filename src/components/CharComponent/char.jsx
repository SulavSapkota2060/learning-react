import React from 'react'


const Char = (props) => {
   const style = {
      border:"1px solid #ccc",
      padding:"10px",
      margin:"10px",
      display:"inline-block",
      textAlign:"center"
   }

   return(
    
       <h4 onClick={props.click} style={style}>{props.text}</h4>
   
   );
}

export default Char;