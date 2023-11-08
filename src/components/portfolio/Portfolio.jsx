import React from "react";
import Fade from 'react-reveal/Fade';
import './Portfolio.css'
import PortfolioCards from './PortfolioCards'


import ThirtyThirdStreet from '../../assets/SS_33rdStreetDetox.png'
import TwentySecondStreet from '../../assets/SS_22ndStreetRecovery.png'
import OceanValley from '../../assets/SS_OceanValley.png'
import GetRealRecovery from '../../assets/SS_GetRealRecovery.png'
import Rodeo from '../../assets/SS_RodeoRecovery.png'
import BeachStreet from '../../assets/SS_BeachStreet.png'
import NaturalRestHouse from '../../assets/SS_NaturaRestHouse.png'
import SunsetRehab from '../../assets/SS_SunsetRehab.png'
import KingsTMS from '../../assets/SS_KingsTMS.png'



const Portfolio = () => {
    return (
        <>
        <div className="portfolio">
        <Fade>
        <div className="portfolio-header container">
            <h1>Explore our custom websites designed for clients across all industries.</h1>

            <div className="portfolio-container">

            <PortfolioCards 
                Image={TwentySecondStreet} 
                ProjectName="20TH STREET RECOVERY" 
                Description="Detox and Residential Center in Los Angeles. We offer support that clients need to allow them to gradually go back to treatment." 
                url="https://20thstreetdetox.biz/"
            />


            <PortfolioCards 
                Image={OceanValley} 
                ProjectName="OCEAN VALLEY BEHAVIORAL HEALTH" 
                Description="KIT is an application for students to keep in touch after graduation. It allows users to post update, like and comment on a posts" 
                url="https://ovbhi.com/"
            />

            <PortfolioCards Image={ThirtyThirdStreet} 
                ProjectName="33RD STREET DETOX" 
                Description="Fore-st-cast is a web application where users can get information about different national parks depending on the state they choose."
                url="https://33rdstreetdetox.com/"
            />

            <PortfolioCards Image={GetRealRecovery}
                ProjectName="GET REAL RECOVERY" 
                Description="The challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS."
                url="https://getrealrecovery.biz/"
            />

            <PortfolioCards Image={Rodeo}
                ProjectName="RODEO RECOVERY" 
                Description="This App allows user to save events for each hour of the day. The app will run in the browser. Feature dynamically updated HTML."
                url="https://rodeorecovery.com/"    
            />

            <PortfolioCards Image={BeachStreet}
                ProjectName="BEACH STREET REHAB" 
                Description="Run Buddy, a company that matches runners with personal trainers. A website that offers fitness training services."
                url="https://beachstreetrehab.com/"
                />

            <PortfolioCards Image={NaturalRestHouse}
                ProjectName="NATURAL REST HOUSE RECOVERY" 
                Description="Note Taker is an App that can be used to write and save notes. This App will use an Express.js backend and will save and retrieve note data."
                url="https://naturalresthouserecovery.com/"    
            />

                <PortfolioCards Image={SunsetRehab}
                ProjectName="SUNSET REHAB" 
                Description="Note Taker is an App that can be used to write and save notes. This App will use an Express.js backend and will save and retrieve note data."
                url="https://www.sunsetrehab.biz/"    
            />

                <PortfolioCards Image={KingsTMS}
                ProjectName="KINGS TMS THERAPY CLINIC" 
                Description="Note Taker is an App that can be used to write and save notes. This App will use an Express.js backend and will save and retrieve note data."
                url="https://kingstms.com/"    
            />


            </div>


            <div className="portfolio-quote">
                    "“Great web design without functionality is like a sports car with no engine.”
– Paul Cookson
                    </div>
                    <div>
                    </div>


        </div>
        </Fade>
        </div>
        </>
    )
}

export default Portfolio