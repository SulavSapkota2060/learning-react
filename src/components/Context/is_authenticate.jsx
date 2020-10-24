import React from 'react'

const Authenticate = React.createContext({is_authenticated:true,
    loginHandler:()=>{}})


export default Authenticate;