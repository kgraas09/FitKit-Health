import React, { useState, useEffect } from 'react';
import getSupplements from './API/getSupplementals.js';
import getPreworkouts from './API/getPreworkouts.js';
import getPostworkouts from './API/getPostworkouts.js';
import Header from './components/header.jsx';
import MasterForm from './components/masterForm.jsx';
import Results from './components/results.jsx';
import './app.css';

const App = () => {
  const [supplements, setSupplements] = useState([]);
  const [preworkouts, setPreworkouts] = useState([]);
  const [postworkouts, setPostworkouts] = useState([]);
  const [step, setStep] = useState(1);
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

  return (
    <>
      <div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-sm-12" id="app-main">
              <div className="master-form">
                <MasterForm currentStep={step} changeStep={setStep} form={form} setForm={setForm}/>
              </div>
            </div>
            <div>
              <div>
                <Results form={form} supplements={supplements} preworkouts={preworkouts} postworkouts={postworkouts}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
