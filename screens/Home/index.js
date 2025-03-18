import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Explorer</Text>
    <TextInput style={styles.searchBar} placeholder="Search for meals or area" />
  </View>
);

const CategoryItem = ({ name }) => (
  <View style={styles.categoryItem}>
    <Text>{name}</Text>
  </View>
);

const ItemList = ({ title, data }) => (
  <View style={styles.itemList}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList 
      horizontal
      data={data} 
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} 
      keyExtractor={(item, index) => index.toString()} 
    />
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList 
        horizontal
        data={["Pizza", "Burgers", "Steak"]} 
        renderItem={({ item }) => <CategoryItem name={item} />} 
        keyExtractor={(item, index) => index.toString()} 
      />
      
      <ItemList title="Popular Items" data={["Food 1", "Food 2", "Food 3"]} />
      <ItemList title="Sale-off Items" data={["Food 4", "Food 5", "Food 6"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  header: { marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold' },
  searchBar: { backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  categoryItem: { padding: 10, backgroundColor: 'white', borderRadius: 5, marginRight: 10 },
  itemList: { marginTop: 15 },
  item: { padding: 15, backgroundColor: 'white', marginRight: 10, borderRadius: 5 }
});

export default HomeScreen;
