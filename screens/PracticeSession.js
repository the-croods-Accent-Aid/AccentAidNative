import {View, Text, Image} from 'react-native'

const image = require("../assets/prac.png")

import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const PracticeSession = () => {
    const nav = useNavigation()
    return <View style = {{flex : 1, gap : 50, backgroundColor : 'white', justifyContent : 'center'}} >
        <Image style = {{ backgroundColor : "#fff",
        alignSelf : 'center',
        margin : 40,
        borderRadius : 100,
        // borderWidth : 0.1,
        // borderColor : 'gray',
        width : 240,
        height : 240
        }} source={image} />

        <Text style = {{
            fontWeight : 'bold',
            fontSize : 24,
            padding : 15
        }}>
            Hey, I am Iris, your AI assistant help you pronounce the word.
        </Text>

        <Button onpress={() => {nav.navigate("WordGenerate")}} style={{alignSelf : 'center', margin : 10, width : '80%'}} title = "Generate Word" />

    </View>
}

export default PracticeSession