import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen'

const Stack = createStackNavigator();

function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Movie Filters' }} />
        <Stack.Screen name="Results" component={ResultScreen} options={{ title: 'Recommendations' }} />
      </Stack.Navigator>
  );
}

export default AppNavigator;
