import axios from 'axios';
import {CONSTANTS} from '../../constant';
import { encode} from 'base-64'

const username = 'ck_cd93916990e15a7625b1ccfcc3eb45245993002c';
const password = 'cs_4933ec5814ead2575b25c279520a1aefcc6a02be';

const combinedCredentials = `${username}:${password}`;
const base64Credentials = encode(combinedCredentials);
const put = async (thunk, uri, body) => {
  let config = {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      'Content-Type': 'multipart/form-data;',
    },
  };

  const onSuccess = ({data}) => {
    return data;
  }

  const onFailure = error => {
    // console.log('error', error);
    throw error.response.data.message;
  };

  return axios
    .put(CONSTANTS.API_URLS.BASE_URL + uri, body, config)
    .then(onSuccess)
    .catch(onFailure);
};

const Put = {
    put,
};

export default Put;
