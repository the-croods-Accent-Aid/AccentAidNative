import {View, Text, Image} from 'react-native'

const image = require("../assets/image.png")

import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const WordGenerate = () => {
    const nav = useNavigation()
    return <View style = {{flex : 1, gap : 50, backgroundColor : 'white', justifyContent : 'center'}} >
        <View style = {{padding : 10}}>
        <Text style = {{
            fontWeight : 'bold',
            fontSize : 24,
            alignSelf :'center'
        }}>
            Etiquette
        </Text>
        <Text style = {{
            // fontWeight : 'bold',
            alignSelf :'center',
            fontSize : 24,
        }}>
            The conventional code of polite behavior in a society.
        </Text>

        </View>
        

        <Image style = {{ backgroundColor : "#fff",
        alignSelf : 'center',
        margin : 40,
        borderRadius : 100,
        // borderWidth : 0.1,
        // borderColor : 'gray',
        width : 240,
        height : 240
        }} source={image} />

        
        <View style = {{flexDirection : 'row', justifyContent : 'center'}}>
        <Button onpress={() => {nav.navigate("Record")}} style={{alignSelf : 'center', margin : 10, width : '40%'}} title = "Record " />
        
        </View>
        

    </View>
}

export default WordGenerate