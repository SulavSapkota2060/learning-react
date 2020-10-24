import React from 'react'

const Wrap = (WrapperContent, className) => {
    return props => (
        <WrapperContent {...props} />
    )
}


export default Wrap