import React, { useState, useEffect } from 'react';
import getSupplements from './API/getSupplementals.js';
import getPreworkouts from './API/getPreworkouts.js';
import getPostworkouts from './API/getPostworkouts.js';
import LandingPage from './components/landing.jsx';
import Header from './components/header.jsx';
import MasterForm from './components/masterForm.jsx';
import Results from './components/results.jsx';
import './app.css';

const App = () => {
  const [supplements, setSupplements] = useState([]);
  const [preworkouts, setPreworkouts] = useState([]);
  const [postworkouts, setPostworkouts] = useState([]);
  const [siteShown, setSiteShown] = useState(false);
  const [buttonView, setButtonView] = useState(true);
  const [form, setForm] = useState({});
  const [shown, setShown] = useState(false);

  useEffect(() => {
    getSupplements()
      .then((data) => { setSupplements(data) 
      return getPreworkouts() })
      .then((data) => { setPreworkouts(data)
      return getPostworkouts() })
      .then((data) => { setPostworkouts(data) })
      .catch((err) => console.log(err));
  }, []);

  const handleFormViewer = () => {
    console.log('Welcome to FitKit.');
    setSiteShown(true);
    setButtonView(false);
  }

  const handleFormSubmit = () => {
    console.log("form: ", form);
    setShown(true);
  };

  return (
    <>
      <div>
        <div className="background-image"></div>
        <Header />
        <LandingPage loadSite={handleFormViewer} buttonAvailable={buttonView}/>
        { siteShown ? <div class="container">
          <div class="row">
            <div class="col-sm-12" id="app-main">
              <div className="master-form">
                <MasterForm form={form} setForm={setForm}/>
              </div>
            </div>
            <button id="button-submit" type="submit" onClick={handleFormSubmit}>View Your Results!</button>
            <div>
              <div>
                { shown ? <Results form={form} supplements={supplements} preworkouts={preworkouts} postworkouts={postworkouts}/> : <div></div> }
              </div>
            </div>
          </div>
        </div> : <div></div> }
      </div>
    </>
  )
};

export default App;
