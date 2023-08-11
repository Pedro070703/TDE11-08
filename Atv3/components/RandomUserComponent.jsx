import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const RandomUserComponent = () => {
  const [userData, setUserData] = useState({});
  
  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setUserData(data.results[0]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome: {userData.name?.first} {userData.name?.last}</Text>
      <Text style={styles.label}>Email: {userData.email}</Text>
      <Text style={styles.label}>Genero: {userData.gender}</Text>
      <Text style={styles.label}>Localidade: {userData.location?.city}, {userData.location?.country}</Text>
      <Text style={styles.label}>aniversario: {userData.dob?.date}</Text>
      <Text style={styles.label}>Telefone: {userData.phone}</Text>
      
      <Button title="Fetch New User" onPress={fetchRandomUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RandomUserComponent;
