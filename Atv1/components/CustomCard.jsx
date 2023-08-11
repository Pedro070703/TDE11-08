import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CustomCard = ({ backgroundColor }) => {
  const [factData, setFactData] = useState(null);

  const fetchFactData = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFactData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <TouchableOpacity
      style={{ backgroundColor, height: 300, padding: 20 }}
      onPress={fetchFactData}
    >
      <View>
        
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Custom Card
        </Text>
        {factData ? (
          <View>
            <Text>Length: {factData.length}</Text>
            <Text>Fact: {factData.fact}</Text>
          </View>
        ) : (
          <Text>Press to fetch data</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;
