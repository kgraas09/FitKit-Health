import React from 'react';

const Step8 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[7];
  // Do you prefer plant based?

  return (
    <div>
      <h3>{currentQuestion}</h3>
    </div>
  )
};

export default Step8;