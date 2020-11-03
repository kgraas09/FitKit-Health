import React from 'react';

const Results = ({supplements, preworkouts, postworkouts}) => {
  
  const supplementArray = [];
  const preworkoutArray = [];
  const postworkoutArray = [];
  
  supplements.forEach((supplement) => {
    supplementArray.push(supplement);
  });
  
  preworkouts.forEach((preworkout) => {
    preworkoutArray.push(preworkout);
  });

  postworkouts.forEach((postworkout) => {
    postworkoutArray.push(postworkout);
  });

  return (
    <div>Results</div>
  )
};

export default Results; 