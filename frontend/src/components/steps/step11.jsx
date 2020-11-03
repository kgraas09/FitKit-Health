import React from 'react';

const Step11 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[10];
  // When do you drink protein? 

  return (
    <div>
      <h3>{currentQuestion}</h3>
    </div>
  )
};

export default Step11;