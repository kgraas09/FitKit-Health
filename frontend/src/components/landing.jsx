import React from 'react';

const LandingPage = ({loadSite, buttonAvailable}) => {
  
  const description = "Welcome to FitKit Health";
  const secondaryDescription = "We make the process of choosing nutritional supplements easier for you!  Fill out a quick profile, sync up your fitness tracker, and we'll take care of the rest.";

  return(
    <div>
      { buttonAvailable ?
      <div id="background"> 
        <div id="landing-page" class="col-sm-4">
          <div className="landing-description">{description}</div>
          <div className="landing-sec-description">{secondaryDescription}</div>
          <div className="button-placement">
            <button type="button" id="landing-button" onClick={loadSite}> Let's Begin </button> 
          </div>
        </div>      
      </div> : <div></div> }
    </div>
  )
};

export default LandingPage;