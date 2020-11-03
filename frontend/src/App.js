import React, { useState, useEffect } from 'react';
import getSupplements from './API/getSupplementals.js';
import getPreworkouts from './API/getPreworkouts.js';
import getPostworkouts from './API/getPostworkouts.js';
import Header from './components/header.jsx';
import MasterForm from './components/masterForm.jsx';
import Results from './components/results.jsx';

const App = () => {
  const [supplements, setSupplements] = useState([]);
  const [preworkouts, setPreworkouts] = useState([]);
  const [postworkouts, setPostworkouts] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    getSupplements()
      .then((data) => setSupplements(data))
      .catch((err) => console.log('Well... there was a problem with the API request: ', err));
  }, []);

  useEffect(() => {
    getPreworkouts()
      .then((data) => setPreworkouts(data))
      .catch((err) => console.log('Well... there was a problem with the API request: ', err));
  }, []);

  useEffect(() => {
    getPostworkouts()
      .then((data) => setPostworkouts(data))
      .catch((err) => console.log('Well... there was a problem with the API request: ', err));
  }, []);

  return (
    <>
      <Header />
      <MasterForm currentStep={step} changeStep={setStep}/>
      <Results supplements={supplements} preworkouts={preworkouts} postworkouts={postworkouts}/>
    </>
  )
}

export default App;
