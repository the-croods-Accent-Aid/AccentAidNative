import {View, Text, Image, TouchableOpacity} from 'react-native'

const images = require("../assets/proff.png")

const Card = ({title = "Lesson", describe = "Professional Word", image = images, onpress = null}) => {
    return <TouchableOpacity style = {{padding : 10,
         gap : 5}} onPress={onpress}>
        <Image source={image} style = {{backgroundColor : "#fff",
        borderRadius : 8,
        width : 220,
        height : 120,
        }} />
        <Text>{describe}</Text>
        <Text style = {{fontWeight : "bold", fontSize : 20}}>{title}</Text>
    </TouchableOpacity>
}

export default Card