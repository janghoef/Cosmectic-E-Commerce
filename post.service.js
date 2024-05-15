import axios from 'axios';
import {CONSTANTS} from '../../constant';
import {encode} from 'base-64';

const username = 'ck_cd93916990e15a7625b1ccfcc3eb45245993002c';
const password = 'cs_4933ec5814ead2575b25c279520a1aefcc6a02be';
const username1 = 'admin';
const password1 = 'my@42*UVR1Lh&j3EL6YDcBb)';

const post = async (thunk, uri, body) => {
  let tempUser;
  let tempPassword;
  if (uri === CONSTANTS.API_URLS.LOGIN) {
    tempUser = username1;
    tempPassword = password1;
  } else {
    tempUser = username;
    tempPassword = password;
  }
  const combinedCredentials = `${username}:${password}`;
  const base64Credentials = encode(combinedCredentials);
  let config = {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      'Content-Type': 'multipart/form-data;',
    },
  };

  const onSuccess = ({data}) => {
    return data;
  };

  const onFailure = error => {
    // console.log('error', error);
    throw error.response.data.message;
  };

  // console.log(CONSTANTS.API_URLS.BASE_URL + uri, body, config);
  return axios
    .post(CONSTANTS.API_URLS.BASE_URL + uri, body, config)
    .then(onSuccess)
    .catch(onFailure);
};

const Post = {
  post,
};

export default Post;
