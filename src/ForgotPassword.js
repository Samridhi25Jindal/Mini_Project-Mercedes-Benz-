import React from "react";
import { useState } from "react";
function ForgotPassword()
{
    const[email,setEmail] = useState("");
    return (
    <div id="forgot">
    <fieldset id="pass" style={{"border":"2px solid white","paddingTop":"10px","paddingBottom":"20px"}}><br/><br/>
        <h2 style={{"backgroundColor":"aqua"}}>Forgot Password?</h2>
        <p style={{"backgroundColor":"aqua"}}>Please enter your email address and we will send you the link to reset your password</p>
        <input style={{"backgroundColor":"aqua"}} type="email" onChange={e=>setEmail(e.target.value)} /><br/><br/>
        <input id="danger" className="btn btn-danger" type="button" value="Request Password Reset Email"/>
    </fieldset>

    </div>
    );
}
export default ForgotPassword;