import {View, Text, Image} from 'react-native'

const image = require("../assets/assess.png")

import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const Assessment = () => {
    const nav = useNavigation()
    return <View style = {{flex : 1, gap : 5, backgroundColor : 'white', justifyContent : 'center'}} >
        <Image style = {{ backgroundColor : "#fff",
        alignSelf : 'center',
        // margin : 40,
        borderRadius : 100,
        width : 200,
        height : 200
        }} source={image} />

        <Text style = {{
            fontWeight : 'bold',
            fontSize : 24,
            alignSelf : 'center'
        }}>
            Final Assessment
        </Text>
        <Image style = {{ backgroundColor : "#fff",
        alignSelf : 'center',
        // margin : 40,
        // borderRadius : 100,
        // width : 200,
        // height : 200
        }} source={require("../assets/full.png")} />

        <Button onpress={() => {nav.navigate("PracticeRoad")}} style={{alignSelf : 'center', margin : 10, width : '80%'}} title = "Finished" />

    </View>
}

export default Assessment