import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import Tagline from '../components/Tagline';
import SearchBar from '../components/SearchBar';

export default function Header() {
  return (
    <Fragment>
      {/* <View style={styles.headerButton}>
        <CustomButton onPress={() => console.log('yes')} image="left" />
        <CustomButton onPress={() => console.log('yes')} image="right" />
      </View> */}
      <Tagline firstTag="We have prepared new products" secondTag="for you" />
      <SearchBar placeholder="Search" />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
