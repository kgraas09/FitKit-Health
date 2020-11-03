const axios = require('axios');

const getSupplements = () => {
  return axios.get('http://localhost:9000/supplementals')
    .then((data) => data.data)
    .catch((err) => console.log('Problem fetching supplementals: ', err));
}

export default getSupplements;
