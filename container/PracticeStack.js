import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PracticeRoad from '../screens/PracticeRoad';
import PracticeSession from '../screens/PracticeSession';
import WordGenerate from '../screens/WordGenerate';
import Record from '../screens/Record';
import Success from '../screens/Success';
import Assessment from '../screens/Assessment';

const Stack = createStackNavigator();

export default function PracticeStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="PracticeRoad">
        <Stack.Screen name="PracticeRoad" component={PracticeRoad} options={{ headerShown : false, title: 'Practice' }} />
        <Stack.Screen name="PracticeSession" component={PracticeSession} options={{ headerShown : false, title: 'Practice Session' }} />
        <Stack.Screen name="WordGenerate" component={WordGenerate} options={{ headerShown : false, title: '' }} />
        <Stack.Screen name="Record" component={Record} options={{ headerShown : false, title: '' }} />
        <Stack.Screen name="Success" component={Success} options={{ headerShown : false, title: '' }} />
        <Stack.Screen name="Assessment" component={Assessment} options={{ headerShown : false, title: '' }} />
        
      </Stack.Navigator>
    // </NavigationContainer>
    
  );
}
