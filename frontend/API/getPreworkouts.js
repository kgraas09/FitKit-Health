const axios = require('axios');

const getPreworkouts = () => {
  return axios.get('localhost:9000/preworkouts')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching preworkouts: ', err));
}

export default getPreworkouts;
