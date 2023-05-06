import React from 'react';
import {StyleSheet, TextInput, View, useColorScheme} from 'react-native';

type searchBarProps = {
  placeholder: string;
};

const SearchBar = ({placeholder}: searchBarProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';
  const backgroundColor = isDarkMode ? '#343434' : '#E8E8E8';

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={[styles.textInput, {color: textColor, backgroundColor}]}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  textInput: {
    padding: 24,
    paddingVertical: 16,
    borderRadius: 32,
  },
});
