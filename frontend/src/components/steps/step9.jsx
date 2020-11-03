import React from 'react';

const Step9 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[8];
  // On average, how many meals?

  return (
    <div>
      <h3>{currentQuestion}</h3>
    </div>
  )
};

export default Step9;