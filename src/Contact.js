import React from "react";
import { useState } from "react";
import { GrFormDown } from 'react-icons/gr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

function Contact()
{
    const[show,setShow] = useState(false);
    const[show1,setShow1] = useState(false);
    const[show2,setShow2] = useState(false);
    const[show3,setShow3] = useState(false);
    const[show4,setShow4] = useState(false);
    const[show5,setShow5] = useState(false);    
    const[show6,setShow6] = useState(false);
    const[show7,setShow7] = useState(false);
    const[show8,setShow8] = useState(false);
    const[show9,setShow9] = useState(false);
    const[show10,setShow10] = useState(false);

    return(
    <>
    <div class="contact">
        <h2 style={{"color":"white"}}>Customer Support</h2>
        <p style={{"color":"white"}}>From popular topics to specific vehlicle-related questions, our sources and representatives are here to help</p>
    <img src="https://www.mbusa.com/content/dam/mb-nafta/us/contact-us/XL-Customer-Assistance-Brand-Hero1.jpg" height="400px" width="100%" />
    <hr/>
    <h2 id="head">Frequently Asked Questions</h2><br/>
    <p id="header">Service and Maintainence</p>
     <div id="tgl" style={{"color":"white"}}>
     <p>What kind of Gasoline should I put in my Mercedes-Benz?
     <button id="b22" onClick={()=>setShow(!show)}>{show?"Show Less" : "Show More"}</button></p>
      {
        show?<p>Mercedes-Benz gasoline engines require the use of premium unleaded gasoline(91 octane or higher). For additional information about fuel for your Mercedes-Benz, please refer to your Operator's Manual.</p> :null
      }
      <hr/>
     </div>
     <div id="tgl" style={{"color":"white"}}>
     <p>What kind of diesel fuel should I put in my Mercedes-Benz? <button id="b22" onClick={()=>setShow1(!show1)}>{show1?"Show Less" : "Show More"}</button></p>
      {
        show1?<p>Depending on the model year of the vehicle, Mercedes-Benz diesel engines require the use of either diesel grades 1-D and 2-D or ultra-low sulfur diesel fuel (15 ppm sulfur maximum).Older diesel vehicles can use the new Ultra Low Sulfur Diesel Fuels (ULSDF).
        Also, currently there are no fuel additives approved by our factory or MBUSA for diesel fuel vehicles.For additional information about the particular diesel fuel requirements for your Mercedes-Benz, please refer to your Operator's Manual. A PDF version of the manual can be downloaded from the Owners Support page.</p> :null
      }
      <hr/>
     </div>

     <div id="tgl">
     <p>What is the optimal tyre pressure of my vehicle? <button id="b22" onClick={()=>setShow2(!show2)}>{show2?"Show Less" : "Show More"}</button></p>
      {
        show2?<p>Your optimal tire pressure is listed on the inside of the fuel door. These tire pressure values will ensure the best ride comfort, fuel economy and longevity of your tires.Pressures should be checked and corrected in the morning before the vehicle has been driven and the tires are cold. Too much tire pressure will result in a hard ride.</p> :null
      }
      <hr/>
     </div>
     <div id="tgl">
     <p>My tyre-pressure warning light illuminates on occasion. What does this mean? <button id="b22" onClick={()=>setShow3(!show3)}>{show3?"Show Less" : "Show More"}</button></p>
     {
        show3?<p>There are a few factors that might cause the tire pressure warning to illuminate, one of which is a leaking tire. It is normal for a properly functioning tire to lose air pressure over time. There are a couple of reasons for this: (1) air can diffuse through a tire at a rate of 1-2 psi per month, (2) a tire typically loses 1-2 psi of pressure for every 10-degree (Fahrenheit) drop in ambient temperature. When your tires are warm, whether from driving or being in an enclosed garage, their pressure will be significantly higher than after the vehicle has been parked outside on a cold winter day. This change alone could trigger the Tire Pressure Monitoring System (TPMS) warning lamp.

        The recommended inflation pressure listed in your vehicle's Operator's Manual or on the label inside the fuel door is a "cold" pressure, meaning the car has been parked outside in ambient temperature conditions for at least an hour and driven less than one mile since being parked. Mercedes-Benz recommends you check your tire pressure with a high-quality gauge (accurate to 1 psi) at least once per month and not to wait for the TPMS indicator to illuminate.</p> :null
      }
      <hr/>
     </div>
     <div id="tgl">
     <p>Can I purchase an extended warranty from Mercedes-Benz? <button id="b22" onClick={()=>setShow4(!show4)}>{show4?"Show Less" : "Show More"}</button></p>
     {
        show4?<p>The Mercedes-Benz Extended Limited Warranty can be purchased through any authorized Mercedes-Benz dealership (restrictions and limitations apply).A surcharge will be added to the Manufacturer's Suggested Retail Price if purchased after 30 days from the new-vehicle warranty start date.

        Please contact your dealer for pricing and details, or learn more on the Extended Limited Warranty page.</p> :null
      }
      <hr/>
     </div><br/>

     <p id="header">Vehicle Resources</p>
     <div id="tgl">
     <p>Where can I find information on compatible Bluetooth phones, pairing instructions and my vehicle passcode? <button id="b22" onClick={()=>setShow5(!show5)}>{show5?"Show Less" : "Show More"}</button></p>
      {
        show5?<p>To find a list of compatible Bluetooth phones or instructions on pairing an existing phone, please visit our Bluetooth Connectivity Website. This site lists all phones which have been tested and approved by Mercedes-Benz to perform at an optimal level in your vehicle as well as other multimedia information. Please note that unapproved mobile phones (phones that are not listed) may or may not function with your vehicle. More specifically, connectivity and performance with your vehicle cannot be assured.</p> :null
      }
      <hr/>
     </div>
     <div id="tgl">
     <p>How can I obtain the Radio Code for my vehicle? <button id="b22" onClick={()=>setShow6(!show6)}>{show6?"Show Less" : "Show More"}</button></p>
      {
        show6?<p>To obtain your radio code, please contact our Customer Assistance Center at 1-800-367-6372 (1-800-222-0100), and have your Vehicle Identification Number (VIN) handy. Your VIN is a 17-digit number located on the inside of the driver’s side door (where the door latches when closed), or on the corner of the dashboard where it meets the windshield.</p> :null
      }
      <hr/>
     </div>

     <div id="tgl">
     <p>How can I verify if my vehicle is involved in a recall? <button id="b22" onClick={()=>setShow7(!show7)}>{show7?"Show Less" : "Show More"}</button></p>
      {
        show7?<p>To find out whether your vehicle is involved in a recall or other campaign, please visit our Recall Information page. If your vehicle is involved in a recall,please contact your preferred authorized Mercedes-Benz dealer to schedule an appointment at your earliest convenience.</p> :null
      }
      <hr/>
     </div><br/>

     <p id="header">Connected Car Services</p>
     <div id="tgl">
     <p>There is an "Anti-Theft Protection Active" message on my COMAND screen.What does this mean? <button id="b22" onClick={()=>setShow8(!show8)}>{show8?"Show Less" : "Show More"}</button></p>
      {
        show8?<p>When a COMAND unit is installed into a vehicle (whether during production or as a replacement) it is equipped with a PIN. This PIN will be associated to the VIN and relies on the communication network within the vehicle for validation. The network check from COMAND is performed at startup, and if the internal vehicle network is not detected, "Anti-Theft protection active" will be displayed.

        It is important to note that this message is NOT related to the vehicle's Anti-Theft alarm.To temporarily remove the message and resume operation of the COMAND unit, press and hold down the COMAND power button for about ten seconds, or restart your vehicle.
        
        Please note that these are temporary solutions. We recommend visiting an authorized Mercedes-Benz dealership to have this situation permanently resolved.</p> :null
      }
      <hr/>
     </div>
     <div id="tgl">
     <p>How do I setup Mercedes Me in my Mobile Phone? <button id="b22" onClick={()=>setShow9(!show9)}>{show9?"Show Less" : "Show More"}</button></p>
      {
        show9?<p>To utilize your connected car services, download the Mercedes me and Mercedes me connect apps on your phone. Then follow the on-screen instructions to pair your vehicle and access your services. Depending on yourmodel, certain services will be available within each of these apps.

        Please note that Mercedes me connect services (which includes features like Remote Start, Lock/Unlock and more for 2019 and newer vehicles) must be activated in-person by an authorized Mercedes-Benz dealer. This can be doneduring the purchase process or by bringing your vehicle into the dealership at any point after. For more information, visit the Mercedes me connect page.</p> :null
      }
      <hr/>
     </div>

     <div id="tgl">
     <p>How do I change or cancel my mbrace subscription? <button id="b22" onClick={()=>setShow10(!show10)}>{show10?"Show Less" : "Show More"}</button></p>
      {
        show10?<p>For help upgrading, changing or canceling your mbrace account, please call the Mercedes-Benz mbrace Response Center toll free at 1-866-990-9007.</p> :null
      }
      <hr/>
     </div>

     <h2 id="head">Contact Information</h2>
        <div id="end">
          <p style={{"fontSize":"larger","color":"plum"}}><strong>Takata Recall Hotline</strong></p>
          <p>If your vehicle has been affected by the Takata airbag recall, call us to schedule your free repair.</p>
          <p><a href="" style={{"color":"lightblue"}}>1-877-xxx-xxx</a></p>
        </div>
        <div id="end">
        <p style={{"fontSize":"larger","color":"plum"}}><strong>Roadside Assistance</strong></p>
          <p>In the event of emergency, get immediate assistance 24 hours a day, 7 days a week</p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-367-xxx</a></p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-222-xxx</a></p>
        </div>
        <div id="end">
        <p style={{"fontSize":"larger","color":"plum"}}><strong>Mercedes-Benz Financial Services</strong></p>
          <p>Speak to a MBFS representative, available Mon-Fri, 9am-9pm or Sat 9am-5pm(ET)</p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-654-xxx</a></p>
        </div>
        <div id="end">
          <p style={{"fontSize":"larger","color":"plum"}}><strong>Connected Car Services</strong></p>
          <p>For setup and assistance with connected vehicle services, contact our Customer Assistance Center.</p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-367-xxx</a></p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-222-xxx</a></p>
        </div>
        <div id="end">
        <p style={{"fontSize":"larger","color":"plum"}}><strong>Customer Care</strong></p>
          <p>For general assistance with your vehicle or account, contact us Mon-Fri,9am-9pm</p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-367-xxx</a></p>
          <p><a href="" style={{"color":"lightblue"}}>1-800-222-xxx</a></p>
        </div>
        <div id="end">
        <p style={{"fontSize":"larger","color":"plum"}}><strong>Email Us</strong></p>
          <p>Prefer Email Instead? Send us a message and we'll respond within 24 hours.</p>
          <p><a href="" style={{"color":"lightblue"}}>Email Us</a></p>
        </div>
        <div id="end">
          <p style={{"fontSize":"larger","color":"plum"}}><strong>Live Chat</strong></p>
          <p>Tuesday-Friday: 9:00AM - 4:00PM EDT</p>
          <p>Saturday-Sunday: Closed</p>
          <p><a href="" style={{"color":"lightblue"}}>Chat with us</a></p>
        </div>
        <Footer></Footer>
        </div>
     
    </>
    );
}
export default Contact;