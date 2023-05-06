import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';
import Card from '../components/Card';

type ItemData = {
  id: string;
  title: string;
  image: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Streetwear',
    image:
      'https://img.freepik.com/free-photo/white-denim-jacket-front-view-streetwear-fashion_53876-106035.jpg?w=740&t=st=1683381571~exp=1683382171~hmac=105b18d2e82ae9cdb0ddbf6a0cdf7f0d7c01956c27116068897f15db657995cf',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Plain Clothing',
    image:
      'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448743.jpg?w=360&t=st=1683381747~exp=1683382347~hmac=bb2234e7e47a50636e9a68fc5c60d311a44c9ec78d0c4ffcf7e1380bf479503e',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Polo Shirt',
    image:
      'https://img.freepik.com/free-photo/fashion-polo-shirt-men_1203-7534.jpg?w=900&t=st=1683381939~exp=1683382539~hmac=3ef35a7af751e2ef54ed6d54909336701a246c7a6b5d4a7038dafc61198eb2eb',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Trainers',
    image:
      'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?w=740&t=st=1683382071~exp=1683382671~hmac=19077e35f9b03468533e592138a04bbbe0b3baba5237fccb5577d517323dbab6',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sneakers',
    image:
      'https://img.freepik.com/premium-photo/hanging-fashionable-sneakers-red-background-stylish-sports-casual-shoes-creative-minimalistic-lay_77190-9336.jpg?w=360',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'White Espadrilles',
    image:
      'https://img.freepik.com/free-photo/men-white-espadrilles-slip-shoes_53876-97142.jpg?w=900&t=st=1683382176~exp=1683382776~hmac=014cede920d4e5d53ae54112582e6a5792cc8e63f26959b52be9566d5135dcb3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'VR Devices',
    image:
      'https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912738.jpg?w=740&t=st=1683382213~exp=1683382813~hmac=99db2b2973e46a113b65f9ac68fb6975db47219450746b5c03581cd3d1964066',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Laptop',
    image:
      'https://img.freepik.com/free-photo/modern-laptop-with-blank-white-screen-wooden-table_23-2148029148.jpg?w=900&t=st=1683382336~exp=1683382936~hmac=c6cb00170f53829c77adc09e1795fa26837670e006af534887bf0e1779810712',
  },
];

export default function ItemSection() {
  const isDarkMode = useColorScheme() === 'dark';

  const textColor = isDarkMode ? 'white' : 'black';
  const backgroundColor = isDarkMode ? '#343434' : '#F2EEEE';

  return (
    <View style={styles.container}>
      {DATA.map(item => {
        return (
          <Card
            key={item.id}
            item={item}
            onPress={() => console.log('clicked')}
            backgroundColor={backgroundColor}
            textColor={textColor}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
