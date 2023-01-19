import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Register()
{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [pno,setPno] = useState("");
    const [password,setPassword] = useState("");
    const [cpass,setCpass] = useState("");
    const [result, setResult] = useState("");

    const [errors, setErrors] = useState({  
            fname  :  "",            
            lname  :  "",            
            email :  "" ,
            country : "",
            city : "",
            password :""
    });
   
    

    function onSubmitClick(event)
    {
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

       let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.fname =  (fname.length == 0)? "*First Name is required..!" : "";
        tempErrorObj.lname =  (lname.length == 0)? "*Last Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "*Password required 8 chars..! " : "";
        tempErrorObj.cpass = (cpass.length == 0)? "*Please confirm your password" : "";
        tempErrorObj.country =  (country.length == 0)? "*Please enter the country" : "";
        tempErrorObj.city =  (city.length == 0)? "*Enter your city!" : "";
        tempErrorObj.pno =  (pno.length < 10)? "*Phone Number should be of 10 characters!" : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': '*Email is not valid!';
        
        setErrors(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let flag = valuesArray.every(item => item.length == 0);

        if(flag == true)
        {             
            alert("Data is Valid");     
            let x = window.confirm("Are you sure..Do you want to submit?");  
            if(x == true)
            {
                alert("You have successfully registered..Now you can close the browser");
            }
            if(x == false)
            {
                alert("You have cancelled the confirmation.");
            }
        }
        else
        {          
         
           alert("Data is invalid or not form not filled properly");
        }
    }
    return (
        <div id="divide" >
        <fieldset style={{"color":"white"}}>
            <legend style={{"textAlign":"center","fontSize":"32px","fontWeight":"bold"}}>User Registration</legend><br/><br/>

            <form id="register" onSubmit={onSubmitClick}  noValidate>

    First Name  :  <input type="text" style={{"color":"white"}} name="fname" onChange={(e) => setFname(e.target.value)}  />
                 <span className="error">{errors.fname}</span>
                 <br/><br/>

    Last Name  :  <input type="text" style={{"color":"white"}} name="lname" onChange={(e) => setLname(e.target.value)}  />
                 <span className="error">{errors.lname}</span>
                 <br/><br/>
                
    Email :  <input type="email" style={{"color":"white"}} name="email" onChange={(e) => setEmail(e.target.value)}  />
                 <span className="error">{errors.email}</span>
                 <br/><br/>

    Country  :  <input type="text" style={{"color":"white"}} name="country" onChange={(e) => setCountry(e.target.value)}  />
                 <span className="error">{errors.country}</span>
                 <br/><br/>

    City  :  <input type="text" style={{"color":"white"}} name="city" onChange={(e) => setCity(e.target.value)}  />
                 <span className="error">{errors.city}</span>
                 <br/><br/>

    Phone Number  :  <input type="number" style={{"color":"white"}} name="pno" onChange={(e) => setPno(e.target.value)}  />
                 <span className="error">{errors.pno}</span>
                 <br/><br/>

    Password  :  <input type="password" style={{"color":"white"}} name="password" onChange={(e) => setPassword(e.target.value)}  />
                 <span className="error">{errors.password}</span>
                 <br/><br/> 

    Confirm Password  :  <input type="password" style={{"color":"white"}} name="cpass" onChange={(e) => setCpass(e.target.value)}  />
                 <span className="error">{errors.cpass}</span>
                 <br/><br/>
    Gender: <input type="checkbox" id="ck1" name="ck1" />Female
    <input type="checkbox" id="ck2" name="ck2" /> Male
    <input type="checkbox" id="ck3" name="ck3" />Can't Say
  <br/><br/>
                <input type="submit" style={{"color":"white","border":"2px solid white","borderRadius":"20%","padding":"10px","fontSize":"20px","fontWeight":"bold"}}  value="Register"  />
                <h3>{result}</h3>

                </form>    

            </fieldset>

        </div>
    );   
}

export default Register;