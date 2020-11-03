import React, { useState } from 'react';
import questionsList from './questionsList.js';
import Step1 from './steps/step1.jsx';

const MasterForm = ({step, changeStep}) => {
  const initialFormValues = {
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: "",
    step8: "",
    step9: "",
    step10: "",
    step11: "",
  };

  const [form, setForm] = useState(initialFormValues);

  const NextButton = () => {
    return (
      <button id="next-button" type="submit">Next</button>
    )
  }

  const SubmitButton = () => {
    return (
      <button id="submit-button" type="submit">Submit</button>
    )
  }

  return (
    <>
      <div>Master Form</div>
      <NextButton />
      <SubmitButton />
    </>
  );
}

export default MasterForm;
