import {View, Text, Image} from 'react-native'

const image = require("../assets/record.png")
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'

const Record = () => {
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
        margin : 60,
        // borderRadius : 100,
        borderWidth : 0.1,
        borderColor : 'gray',
        width : 200,
        height : 100
        }} source={image} />

        
        <View style = {{flexDirection : 'row', justifyContent : 'center'}}>
        <Button onpress={() => {nav.navigate('Success')}} style={{alignSelf : 'center', margin : 10, width : '40%'}} title = "Stop " />
        
        </View>
        

    </View>
}

export default Record