import React from 'react';

const Results = ({supplements, preworkouts, postworkouts, form}) => {
  
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

  console.log('Preworkouts: ', preworkoutArray);
  console.log('Postworkouts: ', postworkoutArray);
  console.log('Supplements: ', supplementArray);

  if (supplementArray[0]) {
    return (
      <>
        <div>
          <p>{supplementArray[0].Name}</p>
          <p>{supplementArray[0].Description}</p>
        </div>
        <div>
          <p>Preworkout Name</p>
          <p>Preworkout Desc</p>
        </div>
        <div>
          <p>Postworkout Name</p>
          <p>Postworkout Desc</p>
        </div>
      </>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
};

export default Results; 