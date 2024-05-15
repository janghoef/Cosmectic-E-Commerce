import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../common/responsivefunction';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProductSkeleton = () => {
  return (
    <ScrollView>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item height={hp(43)} width={wp(100)} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: hp(2.5),
            width: wp(100),
          }}>
          <SkeletonPlaceholder.Item
            height={hp(2)}
            width={wp(30)}
            right={wp(10)}
          />
          <SkeletonPlaceholder.Item
            height={hp(2)}
            width={wp(10)}
            left={wp(10)}
          />
        </View>
        <SkeletonPlaceholder.Item
          height={hp(2)}
          width={wp(30)}
          marginTop={hp(3)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(2)}
          width={wp(30)}
          marginTop={hp(3)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(2)}
          width={wp(70)}
          marginTop={hp(1.5)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(2)}
          width={wp(60)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <SkeletonPlaceholder.Item
          height={hp(1)}
          width={wp(95)}
          marginTop={hp(1)}
          marginLeft={wp(5)}
        />
        <View
          style={{
            marginTop: hp(2),
            flexDirection: 'row',
          }}>
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
            return (
              <View style={{marginRight: wp(2)}} key={index}>
                <SkeletonPlaceholder.Item
                  width={wp(8)}
                  height={wp(8)}
                  borderRadius={wp(8)}
                />
              </View>
            );
          })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkeletonPlaceholder.Item
            height={hp(3)}
            width={wp(25)}
            marginTop={hp(3)}
          />
          <SkeletonPlaceholder.Item
            height={hp(5)}
            width={wp(40)}
            marginTop={hp(3)}
            borderRadius={wp(5)}
          />
        </View>

        <SkeletonPlaceholder.Item
          height={hp(5)}
          width={wp(95)}
          marginTop={hp(3)}
          alignSelf='center'
          marginBottom={hp(5)}
          borderRadius={wp(5)}
        />
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default ProductSkeleton;

const styles = StyleSheet.create({});
