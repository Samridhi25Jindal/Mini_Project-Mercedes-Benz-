import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function LegendsGallery()
{
    return(
        <>
        <h1 style={{"color":"white"}}>Gallery of Legends.</h1>
        <img src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/fullscreenstage_copy/image/MQ7-0-image-20220912110145/mbcom_classic_historie_persoenlichkeiten_titel-neu_3400x1440.jpeg" width="100%" height="500px"/><br/><br/>

        <h2 style={{"color":"white", "textAlign":"center"}}>Founders and Pioneers.</h2>
        <p style={{"color":"white" , "padding-left":"150px" ,"padding-right":"150px" , "textAlign":"center"}}>There are names and people who everyone associates with the success story of Daimler and the brand with the star. Gottlieb Daimler and Carl Benz as inventors of the automobile are merely the most colourful personalities.</p>

        <div class="row">
            <div class="col-6">
                <a id="at" href="https://en.wikipedia.org/wiki/Gottlieb_Daimler"><img id="lg" src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/grid_4_copy/grid-par/griditem_2/image/MQ6-8-image-20220912112535/classic_historie_persoenlichkeiten_gottlieb-daimler_keyvisual_2560x1440-2560x1440.jpeg"/>Gottlieb Daimler</a>
            </div>
            <div class="col-6">
            <a id="at" href="https://en.wikipedia.org/wiki/Wilhelm_Maybach"><img img id="lg" src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/grid_4_copy/grid-par/griditem_3/image/MQ6-8-image-20220912112549/classic_historie_persoenlichkeiten_wilhelm-maybach_2560x1440-2560x1440.jpeg"/>William Maybach</a>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <a id="at" href="https://en.wikipedia.org/wiki/Carl_Benz"><img img id="lg" src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/grid_4_copy/grid-par/griditem_0/image/MQ6-8-image-20220912112601/classic_historie_persoenlichkeiten_carl-benz_2560x1440-1-2560x1440.jpeg"/>Carl Benz</a>
            </div>
            <div class="col-6">
            <a id="at" href="https://en.wikipedia.org/wiki/Bertha_Benz"><img img id="lg" src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/grid_4_copy/grid-par/griditem_1/image/MQ6-8-image-20220912112612/classic_historie_persoenlichkeiten_bertha-benz_keyvisual_v2-1180x686.jpeg"/>Bertha Benz</a>
            </div>
        </div>
        <div class="person">
        <h1 style={{"color":"white"}}>Some Other Personalities</h1>
        <img src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/paragraph_5/paragraph-top/paragraphimage/image/MQ6-10-image-20190114140006/classic_museum_persoenlichkeiten_paul-oshea_2560x1440.jpeg" width="100%" height="550px"/><br/><br/>

        <h1 style={{"color":"white"}}>Paul O'Shea (*1928)</h1>
        <p style={{"color":"white"}}>Racing driver Paul O'Shea won his second title as US sports car champion 60 years ago in the 1956 season driving a Mercedes-Benz 300 SL “Gullwing”. When the season ended on 28 December 1956, he was champion in the category “D Production“ and had scored the most points in the National Sports Car Championship of the Sports Car Club of America (SCCA). The championship title was informally awarded by the news media. The SCCA only honoured the champions in the individual categories. To crown the winner among the champions of the racing classes, the newspapers and magazines counted the highest number of total points achieved by a driver in a season. He went on to defend his title again the following year, this time driving a Mercedes-Benz 300 SLS, the racing version of the 300 SL Roadster.</p><br/>

        <img src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/paragraph_5/paragraph-left/paragraphimage/image/MQ6-10-image-20190114140006/classic_historie_persoenlichkeiten_rudolf-caracciola_2560x1440.jpeg" width="100%" height="550px"/><br/><br/>

        <h1 style={{"color":"white"}}>Rudolf Caracciola (1901 - 1959)</h1>
        <p style={{"color":"white"}}>Competed in his first race as factory driver in a Mercedes in Baden-Baden in 1923 and scored twelve victories before the year was over. In his career, the “rain champion” won well over 100 races and was the most successful German racing driver of the pre-war period. He was three times European champion (1935, 1937, 1938) and set numerous world speed records. He posted the highest speed in 1938 on the Frankfurt-Darmstadt autobahn: 432.7 km/h (268.9 mph)-a record for public roads which has held to this day.</p><br/>

        <img src="https://www.mercedes-benz.com/en/innovation/milestones/gallery-of-legends/_jcr_content/root/paragraph_5/paragraph-right/paragraphimage/image/MQ6-10-image-20190114140002/classic_historie_persoenlichkeiten_manfred-von-brauchitsch_2560x1440.jpeg" width="100%" height="550px"/><br/><br/>

        <h1 style={{"color":"white"}}>Manfred v. Brauchitsch (1905 - 2003)</h1>
        <p style={{"color":"white"}}>Began his sporting career in 1928 as a motorcycle racer. Between 1934 and 1939, he was a member of the Mercedes-Benz team and won several major races, first and foremost the legendary 1934 Eifel race. Manfred von Brauchitsch was nicknamed Pechvogel, unlucky devil, because unfortunate circumstances repeatedly deprived him of victories and good placings. After his active racing days, he became the first president of the German Automobile Association (AvD) in 1948. In 1953, he moved to the former German Democratic Republic.</p>
        </div>
        <div id="back">
        <Link id="white" to="/AboutUs">Back to History </Link><br/><br/>
        </div>
        <Footer></Footer>
        </>

    )
}

export default LegendsGallery;