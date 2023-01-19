import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from 'react-icons/sl';  
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { TbDiscount2 } from 'react-icons/tb';
import Footer from "./Footer";

function Services()
{
    return(
        <>
        <div id="page">
        <h1 style={{"color":"white"}}>Services & Maintainence.</h1>
        <p style={{"color":"white"}}>Safety and value retention for your Mercedes-Benz.</p>
        <img src="https://www.mercedes-benz.com/en/vehicles/service-parts/service-maintenance/_jcr_content/root/slider/sliderchilditems/slideritem/image/MQ7-0-image-20211118105014/01-mercdes-benz-service-parts-service-maintenance-3400x1440.jpeg" width="100%" height="500px"/><br/><br/>

        <h1 style={{"color":"white"}}>Mercedez-Benz Service and Maintainence</h1>
        <p style={{"color":"white"}}>When it comes to reliability and value retention for your Mercedes-Benz, your Mercedes-Benz Service partner is the first choice. We also offer service contracts so that you do not have to confront unexpected bills and can relax knowing that qualified experts are never far away; a comprehensive online offering for you and your vehicle is also included.</p><br/>

         <Link id="history" to="/Schedules"> Schedule your Appointment Now</Link><br/><br/>

         <img src="https://www.mercedes-benz.com/en/vehicles/service-parts/service-maintenance/_jcr_content/root/paragraph_copy/paragraph-right/paragraphimage/image/MQ6-10-image-20200207154500/03-mercedes-benz-vehicles-service-parts-dealers-workshops-2560x1440.jpeg" height="400px" width="100%"/><br/><br/>

         <h2 style={{"color":"white"}}>Mercedes-Benz ServiceContracts.</h2>
     <p style={{"color":"white"}}>Mercedes-Benz is a name that stands for top-class vehicles in which every journey is a delight. Ensuring that you can continue enjoying your Mercedes-Benz is a range of Mercedes-Benz ServiceContracts, offering true peace of mind, tailor-made for you. Be it an extended warranty or a full-service contract: Mercedes-Benz ServiceContracts offer the right solution for every need and every budget, thus freeing you from additional workshop costs since, depending on your specific service contract, unexpected repairs, maintenance and wear parts are already covered. You then don't have to worry about workshop bills and your Mercedes-Benz is always in tip-top condition. With a service contract you get Mercedes-Benz quality every time- with the service of our specially trained workshop specialists and with Mercedes-Benz genuine parts.</p><br/><br/>

     <h2 style={{"color":"white"}}>LEVEL UP your car know-how!</h2>
     <p style={{"color":"white"}}>LEVEL UP! is your hub for all relevant information about spare parts and services from Mercedes-Benz. Regardless of whether it is brakes, tyres or maintenance, we will take you to a new level in terms of car know-how.</p><br/>
     <div id="serve">
     <a id="history" href="https://www.youtube.com/watch?v=SUI6qpXdcUA&t=2s">Service Check-Ups</a>
     <a id="history" href="https://www.youtube.com/watch?v=mFvgglzeGX0&t=1s" >Changing Tyres</a>
     <a id="history" href="https://www.youtube.com/watch?v=639SP9xySxU" >Brakes</a>
     </div>
     <br/><br/>

     <h1 style={{"color":"white"}}>The Best Connection to your Mercedes</h1>
     <p style={{"color":"white"}}>Experience what your Mercedes can really do-with Mercedes me</p>
     <img src="https://www.mercedes-benz.co.in/passengercars/content-pool/marketing-pool/stage-landingpages/mercedes-me-stage/_jcr_content/par/stageelement.MQ4.0.2x.stage.20210603090034.png" width="100%" height="500px" /><br/><br/>

     <p style={{"color":"white"}}>Mercedes Me</p><hr style={{"color":"white","width":"40px","fontWeight":"bold"}}/>

     <h3 style={{"color":"white"}}>Use the digital possibilities of Mercedes-Benz.</h3>
     <div class="row">
        <div class="col-6">
            <p style={{"color":"white"}}>Mercedes me connects your Mercedes with your smartphone, your home and practical digital functions and services that make your everyday life easier. This way you can keep an eye on your Mercedes even when you are not near it. Control vehicle functions, check the current status and stay up to date. The new generation of Mercedes me Apps allows you to connect conveniently with your smartphone: simply log in anywhere using your Mercedes me ID. After logging in, you can pair your vehicle to your Mercedes me account and set up your services. </p>
        </div>
        <div class="col-6">
            <img src="https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/mercedes-me/mercedes-me-app/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ4.7.2x.20210114154800.jpeg" width="100%"/>
            <p style={{"color":"white"}}>One central app - networked all around Mercedes Me app</p>
        </div>
     </div>

     <p style={{"color":"white"}}>Mercedes me connect</p>
     <hr style={{"color":"white","width":"40px","fontWeight":"bold"}}/>
     <h2 style={{"color":"white"}}>The Upgrade for your Mercedes</h2>
     <p style={{"color":"white"}}>Practical and versatile functions that let you get even more out of your Mercedes - that's what the digital products from Mercedes me connect offer. Digitally enrich the experience with your Mercedes and use your smartphone to operate vehicle functions and adjust your settings on site or remotely. Find out which products are available for your Mercedes and how to use them here.</p><br/><br/><br/>
     <div class="row">
        <div class="col-6">
            <h1 id="how" style={{"borderRight":"1px solid white"}}>Mercedes me-connect at a Glance<SlArrowRight /></h1><br/><hr style={{"color":"white","width":"90%"}}/><br/>
        </div>
        <div class="col-6">
           <h1 id="how"> Find Products for my Mercedes<SlArrowRight></SlArrowRight></h1><br/><hr style={{"color":"white"}}/><br/>
        </div>
     </div>
     <div class="row">
        <div class="col-6">
            <h1 id="how" style={{"borderRight":"1px solid white"}}>Pair my Mercedes and get Started<SlArrowRight></SlArrowRight></h1><br/><br/>
        </div>
        <div class="col-6">
           <h1 id="how">Activate, renew and purchase Products<SlArrowRight></SlArrowRight></h1><br/><br/>
        </div>
     </div>
     <p style={{"color":"white"}}>Mercedes me Adapter</p>
     <hr style={{"color":"white","width":"40px","fontWeight":"bold"}}/>
     <h2 style={{"color":"white"}}>Simply retrofit digital networking.</h2>
     <div class="row">
        <div class="col-6">
          <img src="https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/mercedes-me/mercedes-me-adapter/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ4.7.2x.20210504155529.jpeg" width="100%" height="300px" />
          <p style={{"color":"white"}}>The pioneering connection to your mercedes</p>
          <p style={{"color":"white"}}>The Mercedes me Adapter App</p>
        </div>
        <div class="col-6">
            <p style={{"color":"white"}}>Even with many vehicles built in 2002 or later that are not yet factory-networked, you can enjoy the benefits of Mercedes me - the Mercedes me Adapter makes it possible. Upgrade to the Mercedes me Adapter now and operate useful functions relating to your Mercedes via your smartphone.</p>
        </div>
     </div>
          <br/><br/>
     <p style={{"color":"white"}}>The new generation of Mercedes me Apps </p>
     <hr style={{"color":"white","width":"40px","fontWeight":"bold"}}/>
     <h2 style={{"color":"white"}}>Also effectively interconnected</h2>
     <p style={{"color":"white"}}>Different apps, one experience: if you use more than one of the Mercedes me Apps, they merge their functions. From each app you can switch to the others and will be automatically redirected.</p>
     <div class="row"><hr/>
        <div class="col-4">
            <h4 style={{"color":"white"}}>Mercedes ME <SlArrowRight></SlArrowRight></h4>
            <hr/>
            <a id="history" style={{"color":"white"}} href="https://apps.apple.com/de/app/mercedes-me-2020/id1487652920" > <SlArrowRight style={{"color":"white"}}></SlArrowRight>Download from the App Store</a><br/><br/><br/><br/>
            <a id="history" style={{"color":"white"}} href="https://play.google.com/store/apps/details?id=com.daimler.ris.mercedesme.ece.android&pli=1" ><SlArrowRight style={{"color":"white"}}/>Download from Google Play</a>
        </div>
        <div class="col-8">
            <p style={{"color":"white"}}>Mercedes Me.</p>
            <img src="https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/mercedes-me/mercedes-me-apps/_jcr_content/container/par/contentelement/parcontent/imagecontent/image.MQ4.12.2x.20210114154801.jpeg" width="100%" height="300px"/><br/>
            <p style={{"color":"white"}}>You can always keep an eye on your Mercedes via the Mercedes me App. For example, check the current vehicle status: are the windows and doors really closed? Are my tyre pressures correct? How many more miles are left in the tank? All about you: personalize your home screen to find your favourite features even faster and more easily.</p><br/>
          
        </div>
     </div>
        <br/><br/>
     <div>
        <h3 style={{"color":"white"}}>Use Mercedes me connect and the Mercedes me Apps now - here's how.</h3><br/><br/>
        <div class="row" id="rw">
            <div class="col">
            <BsFillEnvelopeFill  id="icon"/><br/><br/>
            <h4 style={{"color":"white"}}>1.Register for Mercedes Me</h4>
            <p style={{"color":"white"}}>Still no Mercedes me ID? Register to then log in to your Mercedes me account here on the Mercedes me Portal or in the Mercedes me App and pair your Mercedes.</p>
            </div>
            <div class="col">
            <TbDiscount2 id="icon"/><br/><br/>
            <h4 style={{"color":"white"}}>2.Activate, renew or purchase digital products</h4>
            <p style={{"color":"white"}}>Order digital products available for your Mercedes. Activation and billing work completely automatically.</p>
            </div>
            <div class="col">
            <AiOutlineCheck id="icon"/><br/><br/>
            <h4 style={{"color":"white"}}>3.Everything at your fingertips</h4>
            <p style={{"color":"white"}}>You can find everything about your Mercedes me services in the Mercedes me App. You can also view your Mercedes me account online here.</p>
            </div>
        </div>
     </div>
     <Footer></Footer>
    </div>

        </>
    );
}
export default Services;