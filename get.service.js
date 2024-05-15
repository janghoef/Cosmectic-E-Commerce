import axios from 'axios';
import {CONSTANTS} from '../../constant';
import {encode} from 'base-64';

// const username = 'ck_b5140394ecce94eecbce42a7c0bc3d9473ad0bfd';
// const password = 'cs_047e5608064c047bd118df7927e9a4b2e7d7649e';
const username = 'ck_cd93916990e15a7625b1ccfcc3eb45245993002c';
const password = 'cs_4933ec5814ead2575b25c279520a1aefcc6a02be';
const combinedCredentials = `${username}:${password}`;
const base64Credentials = encode(combinedCredentials);

const get = (url, params, token) => {
  let config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : `Basic ${base64Credentials}`,
      'Content-Type': 'application/json',
    },
    params: params,
  };
  // console.log('token===',token);
  // console.log(CONSTANTS.API_URLS.BASE_URL + url, config);
  const onSuccess = ({data}) => {
    return data;
  };

  const onFailure = error => {
    console.log('error===', error);
    console.log('params===', params);
    throw new Error('Something went wrong');
  };
// console.log(CONSTANTS.API_URLS.BASE_URL + url, config);
  return axios
    .get(CONSTANTS.API_URLS.BASE_URL + url, config)
    .then(onSuccess)
    .catch(onFailure);
};

const getService = {
  get,
};

export default getService;
