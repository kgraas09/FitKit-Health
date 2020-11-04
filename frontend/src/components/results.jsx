import React, { useEffect } from 'react';

const Results = ({supplements, preworkouts, postworkouts, form}) => {

  const randomNumber = Math.floor(Math.random() * 4) + 1;
  const randomNumber2 = Math.floor(Math.random() * 2) + 1;
  // useEffect(() => {
  // }, []);
  var supplementResult = supplements[0];
  var preworkoutResult = preworkouts[0];
  var postworkoutResult = postworkouts[0];

  if (supplements.length > 0 && preworkouts.length > 0 && postworkouts.length > 0) {
    return (
      <>
        <div>
          <h3>Your Supplement Blend</h3>
          <p>Name: {supplementResult.Name}</p>
          <p>Serving: {supplementResult.Flavor}</p>
          <p>Description: {supplementResult.Description}</p>
          <p>Ingredients: {supplementResult.Ingredients}</p>
        </div>
        <div>
          <h3>Your Preworkout Blend</h3>
          <p>Name: {preworkoutResult.Name}</p>
          <p>Flavor: {preworkoutResult.Flavor}</p>
          <p>Description: {preworkoutResult.Description}</p>
          <p>Ingredients: {preworkoutResult.otherIngredients}</p>
        </div>
        <div>
          <h3>Your Postworkout Blend</h3>
          <p>Name: {postworkoutResult.Name}</p>
          <p>Flavor: {postworkoutResult.Flavor}</p>
          <p>Description: {postworkoutResult.Description}</p>
          <p>Ingredients: {postworkoutResult.otherIngredients}</p>
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