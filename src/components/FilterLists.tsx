import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

const filterData: Array<{id: number; name: string}> = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Newest',
  },
  {
    id: 3,
    name: 'Popular',
  },
  {
    id: 4,
    name: 'Man',
  },
  {
    id: 5,
    name: 'Woman',
  },
];

const FilterLists = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {filterData.map(item => {
        return (
          <TouchableOpacity key={item.id} style={styles.wrapperItem}>
            <Text style={[styles.item, {color: textColor}]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default FilterLists;

const styles = StyleSheet.create({
  container: {paddingVertical: 8},
  wrapperItem: {marginHorizontal: 16},
  item: {fontSize: 16, fontWeight: '400'},
});
