import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: '20%'}}>
        HOME
      </Text>
    </View>
  );
}

