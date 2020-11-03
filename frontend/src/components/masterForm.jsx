import React, { useState } from 'react';
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
      <Step1 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step2 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step3 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step4 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step5 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step6 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step7 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step8 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step9 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step10 formData={form} updateForm={setForm} questions={questionsList}/>
      <Step11 formData={form} updateForm={setForm} questions={questionsList}/>
      <NextButton />
      <SubmitButton />
    </>
  );
}

export default MasterForm;
