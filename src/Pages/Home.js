import React, {Fragment} from 'react';
import TopBanner from "../Components/TopBanner";
import Honor from "../Components/Honor";
import Support from "../Components/Support";
import Sponsor from "../Components/Sponsor";
import Alumni1 from "../Components/Alumni1";
function Home(props) {
    return (
        <Fragment>
           
            <TopBanner/>
          
            <Honor/>
            
            <Alumni1/>
           
            <Support/>
            <Sponsor/>

        </Fragment>
    );
}

export default Home;