import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import {getContentData} from '../../redux/slices/profile';

export default function ContentHandler() {
  const {dispatch, getState} = useReduxStore();
  const {Content} = getState('profile');
  const aboutUs = Content.find((item, index) => item.slug === 'about-us');

  return {aboutUs};
}

const styles = StyleSheet.create({});
