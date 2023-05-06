import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

type ItemData = {
  id: string;
  title: string;
  image: string;
};

type CardProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Card = ({item, onPress, backgroundColor, textColor}: CardProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={{color: textColor}}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    padding: 8,
    marginVertical: 8,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
