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

  // useEffect(() => {
  //   getSupplements()
  //     .then((data) => setSupplements(data))
  //     .catch((err) => console.log('Well... there was a problem with the supplements request: ', err));
  // }, []);
 
  // useEffect(() => {
  //   getPreworkouts()
  //     .then((data) => setPreworkouts(data))
  //     .catch((err) => console.log('Well... there was a problem with the preworkout request: ', err));
  // }, []);

  // useEffect(() => {
  //   getPostworkouts()
  //     .then((data) => setPostworkouts(data))
  //     .catch((err) => console.log('Well... there was a problem with the postworkout request: ', err));
  // }, []);

  useEffect(() => {
    getSupplements()
      .then((data) => { setSupplements(data) 
      return getPreworkouts() })
      .then((data) => { setPreworkouts(data)
      return getPostworkouts() })
      .then((data) => { setPostworkouts(data) })
      .catch((err) => console.log(err));
  }, []);

  
  let completedForm = Object.keys(form).length > 7;
  if (completedForm) {
    setShown(true);
  }

  return (
    <>
      <div id='app-main'>
        <Header />
        <MasterForm currentStep={step} changeStep={setStep} form={form} setForm={setForm}/>
        <Results form={form} supplements={supplements} preworkouts={preworkouts} postworkouts={postworkouts}/>
        </div>
    </>
  )
}

export default App;
