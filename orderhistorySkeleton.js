import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsivefunction';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const OrderHistorySkeleton = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
      <SkeletonPlaceholder speed={1000}>
        <View style={{width: wp(95), alignSelf: 'center'}}>
          <SkeletonPlaceholder.Item
            height={hp(1.5)}
            width={wp(20)}
            top={hp(2)}
            left={wp(2)}
            borderRadius={wp(5)}
          />
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(17)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
            <SkeletonPlaceholder.Item
              height={hp(3)}
              width={wp(20)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <SkeletonPlaceholder.Item
                height={hp(14)}
                width={wp(25)}
                left={wp(2)}
                borderRadius={wp(2)}
              />
              <View style={{left:wp(2)}}>
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(30)}
                  left={wp(2)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(10)}
                  left={wp(2)}
                  marginTop={hp(2.5)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  marginTop={hp(2)}
                  width={wp(14)}
                  left={wp(2.5)}
                  borderRadius={wp(5)}
                />
              </View>
            </View>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(20)}
              top={hp(4)}
              borderRadius={wp(5)}
            />
          </View>

          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(17)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
            <SkeletonPlaceholder.Item
              height={hp(3)}
              width={wp(20)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <SkeletonPlaceholder.Item
                height={hp(14)}
                width={wp(25)}
                left={wp(2)}
                borderRadius={wp(2)}
              />
              <View style={{left:wp(2)}}>
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(30)}
                  left={wp(2)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(10)}
                  left={wp(2)}
                  marginTop={hp(2.5)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  marginTop={hp(2)}
                  width={wp(14)}
                  left={wp(2.5)}
                  borderRadius={wp(5)}
                />
              </View>
            </View>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(20)}
              top={hp(4)}
              borderRadius={wp(5)}
            />
          </View>

          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(17)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
            <SkeletonPlaceholder.Item
              height={hp(3)}
              width={wp(20)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <SkeletonPlaceholder.Item
                height={hp(14)}
                width={wp(25)}
                left={wp(2)}
                borderRadius={wp(2)}
              />
              <View style={{left:wp(2)}}>
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(30)}
                  left={wp(2)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(10)}
                  left={wp(2)}
                  marginTop={hp(2.5)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  marginTop={hp(2)}
                  width={wp(14)}
                  left={wp(2.5)}
                  borderRadius={wp(5)}
                />
              </View>
            </View>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(20)}
              top={hp(4)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(17)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
            <SkeletonPlaceholder.Item
              height={hp(3)}
              width={wp(20)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <SkeletonPlaceholder.Item
                height={hp(14)}
                width={wp(25)}
                left={wp(2)}
                borderRadius={wp(2)}
              />
              <View style={{left:wp(2)}}>
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(30)}
                  left={wp(2)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(10)}
                  left={wp(2)}
                  marginTop={hp(2.5)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  marginTop={hp(2)}
                  width={wp(14)}
                  left={wp(2.5)}
                  borderRadius={wp(5)}
                />
              </View>
            </View>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(20)}
              top={hp(4)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(17)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
            <SkeletonPlaceholder.Item
              height={hp(3)}
              width={wp(20)}
              left={wp(2)}
              borderRadius={wp(5)}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <SkeletonPlaceholder.Item
                height={hp(14)}
                width={wp(25)}
                left={wp(2)}
                borderRadius={wp(2)}
              />
              <View style={{left:wp(2)}}>
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(30)}
                  left={wp(2)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  width={wp(10)}
                  left={wp(2)}
                  marginTop={hp(2.5)}
                  borderRadius={wp(5)}
                />
                <SkeletonPlaceholder.Item
                  height={hp(1.5)}
                  marginTop={hp(2)}
                  width={wp(14)}
                  left={wp(2.5)}
                  borderRadius={wp(5)}
                />
              </View>
            </View>
            <SkeletonPlaceholder.Item
              height={hp(1.5)}
              width={wp(20)}
              top={hp(4)}
              borderRadius={wp(5)}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default OrderHistorySkeleton;

const styles = StyleSheet.create({});
