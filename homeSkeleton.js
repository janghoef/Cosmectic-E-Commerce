import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsivefunction';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HomeSkeleton = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom:hp(10)}}>
      <SkeletonPlaceholder speed={1000}>
        <View style={{width: wp(95), alignSelf: 'center'}}>
          <SkeletonPlaceholder.Item
            height={hp(1)}
            width={wp(40)}
            marginTop={hp(3.5)}
            borderRadius={wp(5)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(60)}
              marginTop={hp(2)}
              borderRadius={wp(5)}
            />
            <SkeletonPlaceholder.Item
              height={hp(5)}
              width={wp(10)}
              marginTop={hp(-2)}
              borderRadius={wp(2)}
            />
          </View>
          <SkeletonPlaceholder.Item
            height={hp(5)}
            width={wp(95)}
            marginTop={hp(2)}
            alignSelf="center"
            borderRadius={wp(7)}
          />

          <SkeletonPlaceholder.Item
            height={hp(23)}
            width={wp(95)}
            marginTop={hp(3)}
            alignSelf="center"
            borderRadius={wp(2)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp(3.5),
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(40)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(10)}
              borderRadius={wp(2)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <SkeletonPlaceholder.Item
                height={hp(23)}
                width={wp(46)}
                marginTop={hp(2)}
                borderRadius={wp(2)}
              />
              <SkeletonPlaceholder.Item
                height={hp(1)}
                width={wp(35)}
                marginTop={hp(1)}
                borderRadius={wp(2)}
              />
              <SkeletonPlaceholder.Item
                height={hp(1)}
                width={wp(20)}
                marginTop={hp(0.5)}
                borderRadius={wp(2)}
              />
              <SkeletonPlaceholder.Item
                height={hp(1)}
                width={wp(35)}
                marginTop={hp(0.5)}
                borderRadius={wp(2)}
              />
            </View>
            <View>
              <SkeletonPlaceholder.Item
                height={hp(23)}
                width={wp(46)}
                marginTop={hp(2)}
                borderRadius={wp(2)}
              />
              <SkeletonPlaceholder.Item
                height={hp(1)}
                width={wp(35)}
                marginTop={hp(1)}
                borderRadius={wp(2)}
              />
              <SkeletonPlaceholder.Item
                height={hp(1)}
                width={wp(20)}
                marginTop={hp(0.5)}
                borderRadius={wp(2)}
              />
              <SkeletonPlaceholder.Item
                height={hp(1)}
                width={wp(35)}
                marginTop={hp(0.5)}
                borderRadius={wp(2)}
              />
            </View>
          </View>
           <SkeletonPlaceholder.Item
            height={hp(23)}
            width={wp(95)}
            marginTop={hp(3)}
            alignSelf="center"
            borderRadius={wp(2)}
          />
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <SkeletonPlaceholder.Item
              height={hp(23)}
              width={wp(46)}
              marginTop={hp(2)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(35)}
              marginTop={hp(1)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(20)}
              marginTop={hp(0.5)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(35)}
              marginTop={hp(0.5)}
              borderRadius={wp(2)}
            />
          </View>
          <View>
            <SkeletonPlaceholder.Item
              height={hp(23)}
              width={wp(46)}
              marginTop={hp(2)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(35)}
              marginTop={hp(1)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(20)}
              marginTop={hp(0.5)}
              borderRadius={wp(2)}
            />
            <SkeletonPlaceholder.Item
              height={hp(1)}
              width={wp(35)}
              marginTop={hp(0.5)}
              borderRadius={wp(2)}
            />
          </View>
        </View>

        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default HomeSkeleton;

const styles = StyleSheet.create({});
