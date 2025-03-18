import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
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

const ProfileScreen = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Hung Nguyen</Text>
        <Text style={styles.profileRole}>Mobile Developer</Text>
        <Text style={styles.profileDescription}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
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
  item: { padding: 15, backgroundColor: 'white', marginRight: 10, borderRadius: 5 },
  
  profileContainer: { flex: 1, alignItems: 'center', backgroundColor: '#F5F5F5' },
  profileHeader: { backgroundColor: '#00AEEF', width: '100%', alignItems: 'center', paddingVertical: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'white' },
  profileInfo: { padding: 20, alignItems: 'center' },
  profileName: { fontSize: 22, fontWeight: 'bold' },
  profileRole: { color: '#00AEEF', marginVertical: 5 },
  profileDescription: { textAlign: 'center', marginVertical: 10 },
  signOutButton: { backgroundColor: '#FFA500', padding: 10, borderRadius: 5, marginTop: 20 },
  signOutText: { color: 'white', fontWeight: 'bold' }
});

export { HomeScreen, ProfileScreen };
