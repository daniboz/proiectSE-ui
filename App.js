import React, {useState, useEffect} from 'react';
import AppNavigator from './navigation/AppNavigator'; // Adjust the path as necessary
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}