import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type customButtonProps = {
  image: string;
  onPress: () => void;
};

const CustomButton = ({image, onPress}: customButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{image}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434',
    borderRadius: 20,
    padding: 20,
  },
});

export default CustomButton;
