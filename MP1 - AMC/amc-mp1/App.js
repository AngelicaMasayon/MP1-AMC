import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const SwitchComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={[styles.container, { backgroundColor: isOn ? 'yellow' : 'black' }]}>
      <Text style={[styles.title, { color: isOn ? 'black' : 'white' }]}>AMC MP1</Text>
      <View style={styles.lightbulbContainer}>
        <Image 
          source={isOn ? require('./lighbulb1.jpg') : require('./lightbulb.jpg')} 
          style={styles.lightbulb}
        />
      </View>
      <TouchableOpacity onPress={toggleSwitch}>
        <View style={[styles.switchButton, { backgroundColor: isOn ? 'green' : 'red' }]}>
          <View style={[styles.indicator, { marginLeft: isOn ? 30 : 0 }]} />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, { color: isOn ? 'black' : 'white' }]}>
        {isOn ? 'ON' : 'OFF'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  lightbulbContainer: {
    marginBottom: 20,
  },
  lightbulb: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  switchButton: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SwitchComponent;
