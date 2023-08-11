import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Linking, StyleSheet, Text, View } from 'react-native';

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(
        'http://universities.hipolabs.com/search?country=Brazil'
      );
      setUniversities(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text
        style={styles.url}
        onPress={() => Linking.openURL(item.web_pages[0])}
      >
        {item.web_pages[0]}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={universities}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  url: {
    color: 'blue',
  },
});

export default UniversityList;
