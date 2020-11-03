const axios = require('axios');

const getPostworkouts = () => {
  return axios.get('http://localhost:9000/postworkouts')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching postworkouts: ', err));
}

export default getPostworkouts;
