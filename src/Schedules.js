import React from "react";
import {useState}  from 'react';
import { Link } from "react-router-dom";
function Schedules()
{
const[vehicleReg, setVehicleReg] = useState("");
const[mileage, setMileage] = useState("");
const[town, setTown] = useState("");
const[date, setDate] = useState("");
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[result, setResult] = useState("");
 
  function  confirm_click()
  {
    if(vehicleReg == "" || mileage == "" || town=="" || date == "" || name == "" || email == "")  
    alert("Please fill the empty boxes"); 
    else
    window.confirm("Do you want to Submit?");
  }

    return(
        <>
        <fieldset id="frm">
        <h1>Service Bookings</h1>
        <p>Get your instant quote in easy steps and book online today</p>
        <hr/>
        <p style={{"padding":"10px","margin":"10px"}}><strong>Which service options do you require?</strong>
        <input style={{"paddingLeft":"10px","margin":"10px"}} type="checkbox" id="ck1" value="Service"/>
        <label>Service</label>
        <input style={{"paddingLeft":"10px","margin":"10px"}} type="checkbox" id="ck1" value="MOT"/>
        <label>MOT</label>
        <input style={{"paddingLeft":"10px","margin":"10px"}} type="checkbox" id="ck1" value="Add Diagnosis"/>
        <label>Add Diagnosis</label>
        <input style={{"paddingLeft":"10px","margin":"10px"}} type="checkbox" id="ck1" value="Add Repairs"/>
        <label>Add Repairs</label></p>
        <hr/>
        <div class="row">
            <div class="col-5">
        <p>Vehicle Registration or VIN:</p>
        <input type="text" style={{"color":"white"}} onChange={(e)=>setVehicleReg(e.target.value)} required/><br/><br/>
        <p>Mileage:</p>
        <input type="text" style={{"color":"white"}} onChange={(e)=>setMileage(e.target.value)} required/><br/><br/>
        <p>Enter postcode or town:</p>
        <input type="text" style={{"color":"white"}} onChange={(e)=>setTown(e.target.value)} required/><br/><br/>
        </div>
        <div class="col-7" style={{"borderLeft":"1px solid white","paddingLeft":"20px"}}>
            <p ><strong>Your Vehicle</strong></p>
            <p>Please enter your vehicle registeration or VIN number to find your vehicle</p>
        </div>
        </div> <hr/>
        <p>Select Date:</p>
        <input type="date" style={{"color":"white"}} onChange={(e)=>setDate(e.target.value)} required/>
        <hr/>
        <h3>Enter Your Details</h3>
        <p>Name:</p>
        <input type="text" style={{"color":"white"}} onChange={(e)=>setName(e.target.value)} required/>
        <p>Email-ID</p>
        <input type="email" style={{"color":"white"}} onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>

        <input style={{"margin":"auto"}} type="button" value="Confirm" className="btn btn-primary" onClick={confirm_click}/><br/>
        </fieldset><br/><br/>
        <Link id="white" to="/Services">Back to Services</Link><br/><br/>
        </>
    )
}

export default Schedules;
