import {View, Text} from 'react-native'

const Title = () => {
    return <View style = {{
        flexDirection : "row",
        justifyContent : 'space-between', 
        padding : 10
    }}>
        <Text style = {{
            fontWeight : "bold", 
            fontSize : 20,
            
        }}>
        Progress for your lessons
        </Text>
        <Text style = {{color : "#1888FC"}}>
        See All
        </Text>

    </View>
}

export default Title