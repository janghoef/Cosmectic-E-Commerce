import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useReduxStore from '../../../hooks/useReduxStore'

export default function SettingHandler() {
    const {getState,dispatch}=useReduxStore()
    const {ProfileData}=getState('profile')
  return {ProfileData,dispatch}
}

const styles = StyleSheet.create({})