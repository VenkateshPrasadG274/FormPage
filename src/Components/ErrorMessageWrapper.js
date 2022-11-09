import React from "react";

import "./ErrorMessageWrapper.css"

const ErrorMessageWrapper =(msg)=>{
    return(
        <div className="validation-error-message">{msg}</div>
    )
}

export default ErrorMessageWrapper;