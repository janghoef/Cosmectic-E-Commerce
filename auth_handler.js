import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import {login, signUp} from '../../redux/slices/auth';
import axios from 'axios';
import {encode} from 'base-64';
import utills from '../../utills';

export default function AuthHandler() {
  const {dispatch, getState} = useReduxStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpData, setSignUpData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    password: '',
    reEnterPassword: '',
    address: '',
  });

  const handleOnChange = useCallback(
    value => {
      setSignUpData(state => ({...state, ...value}));
    },
    [setSignUpData],
  );

  const handleSignUp = () => {
    const formdata = new FormData();
    formdata.append('first_name', signUpData.username);
    formdata.append('email', signUpData.email);
    formdata.append('password', signUpData.password);
    formdata.append('billing[phone]', signUpData.phoneNumber);
    const data={
      formData:formdata,
      signUpData:signUpData
    }
    dispatch(signUp(data))
      .unwrap()
      .then(response => {
        // console.log('handleSignUp response====', response);
      })
      .catch(err => {
        console.log('err ====', err);
        utills.errorAlert(err.message);
      });
  }

  const handleSignIn = () => {
    const formdata = new FormData();
    formdata.append('username', email);
    formdata.append('password', password);
    dispatch(login(formdata))
      .unwrap()
      .then(response => {
        // console.log('handleSignIn response====', response);
      })
      .catch(err => {
        console.log('err ====', err);
        utills.errorAlert(err.message);
      });
  };

  return {
    email,
    password,
    setPassword,
    handleSignIn,
    setEmail,
    handleOnChange,
    handleSignUp,
  };
}

const styles = StyleSheet.create({});
