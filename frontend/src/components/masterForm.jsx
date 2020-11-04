import React from 'react';
import questionsList from './questionsList.js';
import Step1 from './steps/step1.jsx';
import Step2 from './steps/step2.jsx';
import Step3 from './steps/step3.jsx';
import Step4 from './steps/step4.jsx';
import Step5 from './steps/step5.jsx';
import Step6 from './steps/step6.jsx';
import Step7 from './steps/step7.jsx';
import Step8 from './steps/step8.jsx';
import Step9 from './steps/step9.jsx';
import Step10 from './steps/step10.jsx';
import Step11 from './steps/step11.jsx';

const MasterForm = ({step, changeStep, form, setForm}) => {

  const handleButtonClick = (value, step) => {
    // const newObj = {...form};
    // newObj[step] = value;
    // setForm(newObj);
    setForm((form) => (
      {...form, [step]: value}
    ));
    console.log('Form: ', form);
  };


  const handleFormSubmit = () => {
    console.log("form: ", form);
  };

  return (
    <>
      <Step1 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step2 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step3 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step4 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step5 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step6 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step7 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step8 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step9 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step10 questions={questionsList} clickHandler={handleButtonClick}/>
      <Step11 questions={questionsList} clickHandler={handleButtonClick}/>
      <button type="submit" onClick={handleFormSubmit}>View Your Results!</button>
    </>
  );
}

export default MasterForm;
