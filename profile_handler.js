import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import useReduxStore from '../../../hooks/useReduxStore';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateProfileData} from '../../../redux/slices/profile';
import utills from '../../../utills';
export default function ProfileHandler() {
  const {dispatch, getState} = useReduxStore();
  const {ProfileData} = getState('profile');
  const [photo, setPhoto] = useState('');
  const [modal, setModal] = useState(false);
  const [countryCode, setCountryCode] = useState('1');
  const [isCountryCodePickerVisible, setIsCountryCodePickerVisible] =
    useState(false);
  const [profile, setProfileData] = useState({
    username: ProfileData?.first_name,
    phoneNumber: ProfileData?.billing?.phone,
    email: ProfileData?.email,
    country: ProfileData?.billing?.country,
    state: ProfileData?.billing?.state,
    address: ProfileData?.billing?.address_1,
    postalCode: ProfileData?.billing?.postcode,
  });
  const [countryFlag, setcountryFlag] = useState(
    ProfileData?.billing?.country !== '' ? ProfileData?.billing?.country : 'US',
  );
  const handleOnChange = useCallback(
    value => {
      setProfileData(state => ({...state, ...value}));
    },
    [setProfileData],
  );
  const handleUpdateProfile = () => {
    const formdata = new FormData();
    formdata.append('first_name', profile.username);
    formdata.append('billing[phone]', profile.phoneNumber);
    formdata.append('billing[state]', profile.state);
    formdata.append('billing[country]', countryFlag);
    formdata.append('billing[address_1]', profile.address);
    formdata.append('billing[postcode]', profile.postalCode);

    const data = {
      formdata: formdata,
      id: ProfileData?.id,
    };

    dispatch(updateProfileData(data))
      .unwrap()
      .then(response => {
        // console.log('handleUpdateProfile response', response);
        utills.successAlert('Profile has been updated')
      })
      .catch(err => {
        console.log('handleUpdateProfile err', err);
      });
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response.didCancel) {
        return;
      }

      if (!response.assets) {
        return;
      }
      let abc = response?.assets[0];
      let data = {
        name: abc?.fileName,
        type: abc?.type,
        uri: abc?.uri,
      };
      setPhoto(data);
    });
  };
  const onSelect = country => {
    setCountryCode(country.callingCode[0]);
    setcountryFlag(country.cca2);
  };
  return {
    photo,
    modal,
    isCountryCodePickerVisible,
    countryCode,
    countryFlag,
    profile,
    onSelect,
    setcountryFlag,
    setCountryCode,
    setIsCountryCodePickerVisible,
    setModal,
    setPhoto,
    handleOnChange,
    handleUpdateProfile,
    handleChoosePhoto,
  };
}

const styles = StyleSheet.create({});
