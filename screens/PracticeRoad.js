import {View, Text, ScrollView, StatusBar} from 'react-native'

import Banner from '../components/Banner'

import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Title from '../components/Title'

import { useNavigation } from '@react-navigation/native'

const PracticeRoad = () => {

    const nav = useNavigation()
   return <View style = {{backgroundColor : 'white'}}>
    <StatusBar  />
   <ScrollView>

        {/* <Banner /> */}
        <View style = {{flexDirection : 'row', gap : 5, padding : 10}}>
        <Text
            style = {{
                fontSize : 35,
                fontWeight : 'bold',
                color : '#1888FC'

            }}
        > Practice</Text>
        <Text
            style = {{
                fontSize : 35,
                fontWeight : 'bold',

            }}
        >RoadMap</Text>
            
        </View>
         
        
        <View style = {{display : "flex", flexDirection : "row"
            , marginVertical : 15 }}>
             <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} ><Card onpress = {() => {nav.navigate("PracticeSession")}}/>
             <Card image={require("../assets/pronun.png") } title='Pronunciation' describe='Accent Reduction'/>
             <Card image={require("../assets/mock.png") } title='Mock Interviews' describe='Get Ready to work Abroad'/>
             <Card image={require("../assets/ai.png") } title='Practice with AI' describe='Practice with Confidence'/>
             </ScrollView>
             
         </View>
        <Title />
        <Carousel />
        <Title />
        <Carousel param={ true}/>
        <Title />
        <Carousel />
    </ScrollView>
    </View>
}

export default PracticeRoad