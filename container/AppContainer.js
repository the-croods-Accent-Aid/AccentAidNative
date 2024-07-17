import {View, Text} from 'react-native'

import QuestionStack from './QuestionStack';
import Card from '../components/Card';
import HomeScreen from '../screens/HomeScreen';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PracticeStack from './PracticeStack';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen} 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ focused }) => focused ?<FontAwesome name="home" size={24} color="blue" />  : <FontAwesome name="home" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                }}
            />
            <Tab.Screen name = "Practice" component = {PracticeStack} 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ focused }) => focused ?<FontAwesome5 name="memory" size={24} color="blue" />  : <FontAwesome5 name="memory" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                }}
            />
            <Tab.Screen name = "Community" component = {QuestionStack} 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ focused }) => focused ?<FontAwesome name="support" size={24} color="blue" />  : <FontAwesome name="support" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                }}
            />
            <Tab.Screen name = "Profile" component = {Profile} 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ focused }) => focused ?<Feather name="user" size={24} color="blue" />  : <Feather name="user" size={24} color="gray" />,
                    animation: "slide_from_left", headerBackVisible: false, headerStyle: {
                        backgroundColor: '#1F2544',
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '200',
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default AppContainer