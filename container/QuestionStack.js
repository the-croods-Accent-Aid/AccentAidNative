import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionListScreen from '../screens/QuestionListScreen';
import DetailScreen from '../screens/DetailScreen';
import AddAnswerScreen from '../screens/AddAnswerScreen';

const Stack = createStackNavigator();

export default function QuestionStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionList">
        <Stack.Screen name="QuestionList" component={QuestionListScreen} options={{ title: 'Question and Answer' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
        <Stack.Screen name="AddAnswer" component={AddAnswerScreen} options={{ title: 'Ask Question' }} />
      </Stack.Navigator>
    // </NavigationContainer>
    
  );
}
