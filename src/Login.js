import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
function Login()
{
    const[uname,setUname] = useState("");
    const[password,setPassword] = useState("");
    const[result,setResult] = useState("");
    const [errors, setErrors] = useState({  
        uname  :  "",            
        password  :  ""
    });

    function loginClick(event)
    {
        event.preventDefault();
    let tempErrorObj = Object.assign({}, errors);

    tempErrorObj.uname = (uname.length == 0)?  "*User Name is required!" : "";
    tempErrorObj.password = (password.length == 0)?  "*Password is required! " : "";
        
     setErrors(tempErrorObj);
     let valuesArray = Object.values(tempErrorObj);
     let flag = valuesArray.every(item => item.length == 0);

     if(flag == true)
     {             
         alert("Data is Valid");     
         let x = window.confirm("Are you sure..Do you want to submit?");  
         if(x == true)
         {
             alert("Successfully logged in.");
         }
         if(x == false)
         {
             alert("You have cancelled the confirmation.");
         }
     }
     else
     {          
      
        alert("Invalid");
     }
    }
    return(
    <div id="set">
    <fieldset style={{"border":"2px solid white","padding":"20px"}}><br/>
        <h2><AiOutlineUser></AiOutlineUser>User Login</h2>
        <hr/>
        <p>Username:</p>
        <input type="text" id="in" onChange={(e)=>setUname(e.target.value)}/>
        <span className="error">{errors.uname}</span>
        <br/><br/>
        <p>Password:</p>
        <input type="password" id="in" onChange={(e)=>setPassword(e.target.value)}/>
        <span className="error">{errors.password}</span>
        <br/><br/> 
        <Link to="/ForgotPassword">Forgot Password?</Link><br/><br/>

        <input type="button" className="btn btn-success" value="Submit" onClick={loginClick}/>
    <br/><br/><br/><br/>
       <h2><AiOutlineUser></AiOutlineUser>New User</h2>
       <hr/><br/>
       <Link to="/Register" id="reg">Click here to Register.It's fast and free</Link><br/><br/>
    </fieldset>
    </div>
    );
}
export default Login;