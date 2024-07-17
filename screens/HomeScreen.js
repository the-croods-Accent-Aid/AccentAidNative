import {View, Text, ScrollView, StatusBar} from 'react-native'

import Banner from '../components/Banner'

import Carousel from '../components/Carousel'
import Title from '../components/Title'

const HomeScreen = () => {
    

   return <View style = {{backgroundColor : 'white'}}>
     <View style = {{alignSelf: 'center', flexDirection : 'row', gap : 5, padding : 10, margin : 10}}>
        <Text
            style = {{
                fontSize : 35,
                fontWeight : 'bold',
                color : '#1888FC'

            }}
        > Accent</Text>
        <Text
            style = {{
                fontSize : 35,
                fontWeight : 'bold',

            }}
        >Aid</Text>
            
        </View>
    <StatusBar  />
    
   <ScrollView>
        
   <Banner />
        <Title />
        <Carousel param={ true}/>
        <Title />
        <Carousel />
        <Carousel param={ true}/>
    </ScrollView>
    </View>
}

export default HomeScreen