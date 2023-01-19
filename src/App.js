import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import Footer from './Footer';

function App() {
  const[learn,setLearn] = useState(false);
  let mercArray = ["https://logos-world.net/wp-content/uploads/2021/03/AMG-Emblem.png" , "https://group.mercedes-benz.com/bilder/misc/markenlogos/svg/mercedes-maybach-logo-svg.svg" , "https://group.mercedes-benz.com/bilder/misc/markenlogos/svg/mercedes-eq-logo-svg.svg" , "https://group.mercedes-benz.com/bilder/misc/markenlogos/svg/mercedes-me-logo-svg.svg" , "https://group.mercedes-benz.com/bilder/misc/markenlogos/svg/mercedes-benz-financial-logo-svg.svg" , "https://group.mercedes-benz.com/bilder/misc/markenlogos/svg/mercedes-benz-bank-logo-svg.svg" , "https://group.mercedes-benz.com/bilder/misc/markenlogos/svg/athlon-logo-svg.svg" , "https://www.bagajhavuzupaspas.com/image/cache/catalog/arabalar/logo/mercedes/mercedes-gle-logo-600x315.png"];

  let result = mercArray.map(x=> <><img id="img1" src={x}/> </>)

  let recommArray = [ {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_1.component.damq6.3339594823784.jpg/GLB_MBC_our.jpg" , topic:"The new GLB" , sub:"All kinds of strength."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_1433181204.component.damq6.3335101029692.jpg/option_2.jpg" , topic:"Find the digital product for your Mercedes." , sub:"The Mercedes me Store"} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_464863480.component.damq2.3291835121963.jpg/WhatsApp%20Live%20Chat%20Mobile%20Banner.jpg" , topic:"Help when you need it." , sub:" Chat with our concierge live on WhatsApp."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_1458819270.component.damq6.3328890981650.jpg/MB_EQS-580_Adapts_Desktop-banner.jpg" , topic:"The new EQS from Mercedes-EQ." , sub:"This is for you, world."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c.component.damq2.3307738296018.jpg/Image%20web%20banner.jpg" , topic:"Stylish. Just like you." , sub:"The all-new Mercedes-Benz A-Class Limousine."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_205597732.component.damq2.3300307748576.jpg/GLC%20banner_Mobile_1534x1151%20pixels-01.jpg" , topic:"Takes you to the most beautiful places . Connects you worldwide." , sub:"The Mercedes-Benz GLC."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_193667439.component.damq2.3300304934221.jpg/E-Class%20banner_Mobile_1534x1151%20pixels-01.jpg" , topic:"Made to win the day." , sub:"The Mercedes-Benz E-Class LWB."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_830192075.component.damq2.3270483735724.jpg/Mercedes%20me%20Mobile%20Banner.jpg" , topic:"Mercedes me" , sub:"Experience what your Mercedes can really do - with Mercedes me."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_2_2022786683.component.damq2.3289392130411.jpg/Finance%20and%20Insurance%20Mobile%20Banner.jpg" , topic:"Reimagine Instant Ownership." , sub:"Learn More"} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_9_1592023656.component.damq2.3270483800753.jpg/Customer%20Services%20Mobile%20Banner.jpg" , topic:"My Mercedes. My Service." , sub:"Quality service from the best."} ,
  {image:"https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_2_2135898001.component.damq2.3308681820388.jpg/Pre-Owned%20cars%20Mobile%20Banner.jpg" , topic:"Pre-Owned cars" , sub:"Find your dream car with Mercedes-Benz pre-owned cars."} 
  ];
  let recommend=recommArray.map(x=>
      <div>
    <p><img src={x.image}/></p>
    <p><strong>{x.topic}</strong></p>
    <p>{x.sub}</p>
    </div>
    );

  return (
    <div style={{"backgroundColor":"black"}}>
    <div id="home1">
    <hr/>
    <p align="center">Explore your dream-Mercedez Benz</p>
    <hr/>
    </div>
    <div id="content" style={{"color":"white"}}>
      <h4>The Mercedez-Benz Group.</h4><br/>
      <p>The Mercedes-Benz Group AG (former Daimler AG) is one of the world's most successful automotive companies. With Mercedes-Benz AG, we are one of the leading global suppliers of premium and luxury cars and vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.</p>
     <button id="b1" onClick={()=>setLearn(!learn)}>Learn More</button><br/><br/>
      {
        learn?<div><h3>Mercedes-Benz Group AG is one of the world's most successful automotive companies. With Mercedes-Benz AG, the Group is one of the leading global suppliers of premium and luxury cars and vans. Mercedes-Benz Mobility AG offers financing, leasing, car subscription and car rental, fleet management, digital services for charging and payment, insurance brokerage, as well as innovative mobility services.</h3><p>The company founders, Gottlieb Daimler and Carl Benz, made history by inventing the automobile in 1886. As a pioneer of automotive engineering, Mercedes-Benz sees shaping the future of mobility in a safe and sustainable way as both a motivation and obligation. The company's focus therefore remains on innovative and green technologies as well as on safe and superior vehicles that both captivate and inspire. Mercedes-Benz continues to invest systematically in the development of efficient powertrains and sets the course for an all-electric future: The brand with the three-pointed star pursues the goal to go all-electric, where market conditions allow. Shifting from electric-first to electric-only, the world's pre-eminent luxury car company is accelerating toward an emissions-free and software-driven future. The company's efforts are also focused on the intelligent connectivity of its vehicles, autonomous driving and new mobility concepts as Mercedes-Benz regards it as its aspiration and obligation to live up to its responsibility to society and the environment.</p>

        <p>Mercedes-Benz sells its vehicles and services in nearly every country of the world and has production facilities in Europe, North and Latin America, Asia and Africa. In addition to Mercedes-Benz, the world's most valuable luxury automotive brand (source: Interbrand study, 20 Oct. 2021), Mercedes-AMG, Mercedes-Maybach, Mercedes-EQ and Mercedes me as well as the brands of Mercedes-Benz Mobility: Mercedes-Benz Bank, Mercedes-Benz Financial Services and Athlon.</p>
        
        <p>The company is listed on the Frankfurt and Stuttgart stock exchanges (ticker symbol MBG). In 2021, the Group had a workforce of around 172,000 and sold 2.3 million vehicles. Group revenues amounted to €168.0 billion and Group EBIT to €29.1 billion.</p></div> :null
      }
    </div>
      {result}
      <div id="listing">
      <h1 style={{"margin":"20px"}}>Our Recommendations</h1>
      <hr/>
      <div id="rec">
      {recommend}
      </div>
<br/><br/>
      <h3>Legal Disclaimers and Annotations</h3>
      <hr/>
      <p>The prices specified herein are indicative and may not be final. The indicated price may differ due to purchase of any additional accessories, parts or products, services that may be availed by the customer, discounts offered, change in government taxes, duties, fees or levies, change of state of registration etc. Mercedes- Benz India or the Authorised Franchise Partner shall not be responsible or liable to compensate for the difference in the prices due to aforesaid reasons or any reason beyond the control of Mercedes-Benz India or the Authorised Franchise Partner. Actual colour of the vehicle may differ from those shown in pictures. While Mercedes-Benz India tries to make sure that all information provided herein is accurate, we shall not be responsible for typographical and other errors (e.g., data transmission) that may appear on the site. If the posted price (including finance and lease payments) for a vehicle is incorrect, Mercedes-Benz India will endeavor to provide you with the correct prices as soon as we become aware of the error. In the event a vehicle is priced incorrectly, Mercedes-Benz India shall have the right to refuse or cancel any orders placed for the vehicle presented with the incorrect price. In addition, vehicle prices are subject to change and all vehicles are subject to prior sale and may not be available when you are ready to purchase.</p>
      </div>
      <div id="foot">
      <Footer></Footer>
      </div>
      </div>
  );
}

export default App;
