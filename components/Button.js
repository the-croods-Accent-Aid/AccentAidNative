import {View, Text, TouchableOpacity} from "react-native"



const Button = ({title = "Get Started", onpress = null, style = null} ) => {
    return <TouchableOpacity 
    onPress={onpress}
    style = {[{
            borderRadius : 10,
            backgroundColor : "#1888FC",
            width : 90,
            height : 30,
            justifyContent : 'center',
            alignItems : 'center',
            marginTop : 10
            }, style]}>
        <Text
            style = {{
                color : 'white',
                fontWeight : 'bold'
            }}
        >{title}</Text>
    </TouchableOpacity>
}

export default Button