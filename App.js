import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/components/navigation/Navigation';
import NavigationTab from './src/components/navigation/NavigationTab';
import NavigationDrawe from './src/components/navigation/NavigationDrawe';


export default function App() {
  return (
    <NavigationContainer>
   <NavigationDrawe />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
