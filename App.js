import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomCard from './Atv1/components/CustomCard';
import Lista from './Atv2/components/Lista';
import RandomUserComponent from './Atv3/components/RandomUserComponent';
import UniversityList from './Atv4/components/UniversityList';

const App = () => {
  const data = [
    { name: 'Fulano', idade: 20 },
    { name: 'Beltrano', idade: 22 },
    { name: 'Ciclano', idade: 19 },
    { name: 'Jhon Doe', idade: 30 },
  ];

  const [activeTab, setActiveTab] = useState('CustomCard');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'CustomCard':
        return <CustomCard backgroundColor="antiquewhite" />;
      case 'MinhaLista':
        return <Lista items={data} />;
      case 'RandomUser':
        return <RandomUserComponent />;
      case 'UniversityList':
        return <UniversityList />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContent}>{renderActiveTab()}</View>
      <View style={styles.tabsContainer}>
        <TabButton title="Card" onPress={() => setActiveTab('CustomCard')} />
        <TabButton title="Minha Lista" onPress={() => setActiveTab('MinhaLista')} />
        <TabButton title="Random User" onPress={() => setActiveTab('RandomUser')} />
        <TabButton title="University List" onPress={() => setActiveTab('UniversityList')} />
      </View>
    </View>
  );
};

const TabButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabButton}>
      <Text style={styles.tabButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
