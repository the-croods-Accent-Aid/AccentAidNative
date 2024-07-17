import {View, Text, ScrollView} from 'react-native'

import Card from './Card'
import Title from './Title'



const Carousel = ({param}) => {
    if( param === true){
        return <View style = {{display : "flex", flexDirection : "row"
            , marginVertical : 15 }}>
             <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} ><Card />
             <Card image={require("../assets/pronun.png") } title='Pronunciation' describe='Accent Reduction'/>
             <Card image={require("../assets/mock.png") } title='Mock Interviews' describe='Get Ready to work Abroad'/>
             <Card image={require("../assets/ai.png") } title='Practice with AI' describe='Practice with Confidence'/>
             </ScrollView>
             
         </View>
    }
    else{
        return <View style = {{display : "flex", flexDirection : "row"
        , marginVertical : 15}}>
             <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} >
             <Card image={require("../assets/ai.png") } title='Practice with AI' describe='Practice with Confidence'/>
             <Card image={require("../assets/mock.png") } title='Mock Interviews' describe='Get Ready to work Abroad'/>
             <Card image={require("../assets/pronun.png") } title='Pronunciation' describe='Accent Reduction'/>
             <Card />
            
             </ScrollView>
             
         </View>

    }
   
}

export default Carousel