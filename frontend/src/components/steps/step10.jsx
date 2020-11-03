import React from 'react';

const Step10 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[9];
  // On average, how much sleep?

  return (
    <div>
      <h3>{currentQuestion}</h3>
    </div>
  )
};

export default Step10;