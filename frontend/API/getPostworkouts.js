const axios = require('axios');

const getPostworkouts = () => {
  return axios.get('localhost:9000/postworkouts')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching supplementals: ', err));
}

export default getPostworkouts;
