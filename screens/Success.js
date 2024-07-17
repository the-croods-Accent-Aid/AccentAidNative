import {View, Text, Image} from 'react-native'

const image = require("../assets/success.png")

import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Success = () => {
    const nav = useNavigation()
    return <View style = {{flex : 1, gap : 50, backgroundColor : 'white', justifyContent : 'center'}} >
        <Image style = {{ backgroundColor : "#fff",
        alignSelf : 'center',
        margin : 40,
        borderRadius : 100,
        width : 200,
        height : 200
        }} source={image} />

        <Text style = {{
            fontWeight : 'bold',
            fontSize : 24,
            padding : 15,
            alignSelf : 'center'
        }}>
            Your recording is uploaded
        </Text>

        <Button onpress={() => {nav.navigate("Assessment")}} style={{alignSelf : 'center', margin : 10, width : '80%'}} title = "Get Assessment" />

    </View>
}

export default Success