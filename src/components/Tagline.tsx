import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

type taglineProps = {
  firstTag: string;
  secondTag: string;
};

const Tagline = ({firstTag, secondTag}: taglineProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: textColor}]}>
        {firstTag} <Text style={styles.span}>{secondTag}</Text>
      </Text>
    </View>
  );
};

export default Tagline;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
  },
  span: {
    fontWeight: '500',
    color: '#caf76f',
  },
});
