import React from "react";
import { Link } from "react-router-dom";
function Footer() {
return(
<>
<hr style={{"color":"white"}} />
<div>
    <a href="https://www.facebook.com/mercedesbenzcareers"><img  id="maze" src="https://th.bing.com/th/id/R.be5605a86dd762b668e648297bfa9057?rik=fpqw9TOP9GAV5Q&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffb-logo-png-transparent%2ffb-logo-png-transparent-15.png&ehk=Hof1nrqOlGYt3K0LhtdLE3ajjHfX13eIPTGDOs1O4bk%3d&risl=&pid=ImgRaw&r=0" /></a>
    <a href="https://www.youtube.com/user/mercedesbenztv"><img  id="maze" style={{"color":"white"}} src="https://th.bing.com/th/id/OIP.eJHulO8GzYW_OqPjvS3q3wHaHa?pid=ImgDet&rs=1" /></a>
    <a href="https://twitter.com/MercedesBenz"><img  id="maze" style={{"color":"white"}} src="https://th.bing.com/th/id/OIP.mU1JlkDnhtzLCinS6n9B_AHaGB?pid=ImgDet&rs=1" /></a>
    <a href="https://www.instagram.com/mercedesbenz_careers/"><img  id="maze" src="https://th.bing.com/th/id/OIP.2kg9qaCgk7ZZ8bFRu9oVKwHaHa?pid=ImgDet&w=800&h=800&rs=1" /></a>
    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHCNA51JaM2vAAAAYXI9L7oWrzK1emgw2M5ubgO0Q_XcqWolcrEUPHY2mpFXZWZzRHvk00pKJPjZqUeBkoSZEo3qQbuX_E2BDiR9ppLzqmA8G4pFQ3UNDj7GcBx1PTU9BgE0RI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmercedes-benz_ag"><img  id="maze" src="https://www.dlf.pt/png/big/9/96785_white-linkedin-icon-png.png" /></a><br/><br/>
</div>
<Link id="links" to="/">Home</Link>
  <Link id="links" to="/AboutUs">About </Link>
  <Link id="links" to="/Services"> Services </Link>
  <Link id="links" to="/Products"> Cars List </Link>
  <Link id="links" to="/Login"> Login </Link>
  <Link id="links" to="/Register"> Register </Link>
  <Link id="links" to="/Contact"> Contact Us </Link><br/><br/>

  <p style={{"color":"white","fontSize":"small"}}>&copy; 2023. Mercedes-Benz India Pvt. Ltd. All Rights Reserved (provider)</p><br/>
  <p style={{"color":"white","fontSize":"small"}}>* The electricity consumption was determined on the basis of Regulation 2017/1151/EU according to WLTP.</p><br/>
  <p style={{"color":"white","fontSize":"small"}}>** Electric energy consumption and range have been determined on the basis of Regulation (EC) No. 692/2008 according to NEDC. Electric energy consumption and range depend on the vehicle configuration.</p><br/>
  <p style={{"color":"white","fontSize":"small"}}>** The figures are provided in accordance with the German regulation 'PKW-EnVKV' and apply to the German market only. Further information on official fuel consumption figures and the official specific CO₂ emissions of new passenger cars can be found in the EU guide 'Information on the fuel consumption, CO₂ emissions and energy consumption of new cars', which is available free of charge at all sales dealerships, from DAT Deutsche Automobil Treuhand GmbH</p><br/>

</>
);}

export default Footer;