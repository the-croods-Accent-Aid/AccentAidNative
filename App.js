import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionListScreen from './screens/QuestionListScreen';
import DetailScreen from './screens/DetailScreen';
import AddAnswerScreen from './screens/AddAnswerScreen';
import AppContainer from './container/AppContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionList">
      <Stack.Screen name = ' ' component={AppContainer} options={{headerShown : false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
