import {View, Text, Image} from 'react-native'
import Button from './Button'

const images = require('../assets/books.png')
import { useNavigation } from '@react-navigation/native'

const Banner = () => {
    const nav = useNavigation()
    return <View style = {{flexDirection : 'row',
        margin : 10,
        borderRadius : 17,
            backgroundColor :  '#EAF2FF' 
    }}>
        
        <View style = {{
            width : '70%',
            padding : 20,
                    
            }}>
                <Text style = {{fontWeight : "bold", fontSize : 25}}>
            Welcome
        </Text>
        <Text>Achieve Fluency, Speak Clearly, and
        Speak with Confidence</Text>
        <Button onpress={() => {nav.navigate("PracticeSession")}}/>
        </View>
        <Image source={images} style = {{
        // marginHorizontal : 10,
        width : 100,
        height : 140,
        borderBottomRightRadius : 17,
        borderTopRightRadius : 17
        }} />
    </View>
}

export default Banner