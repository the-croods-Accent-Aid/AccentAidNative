import {View, Text, Image, TouchableOpacity} from 'react-native'

const image = require("../assets/therock.png")


import { useNavigation } from '@react-navigation/native'

const TextBox = ({text}) => {
    
    const nav = useNavigation()
    return <TouchableOpacity onPress={() => {nav.navigate("Home")}} style = {{
        borderWidth: 1,
        borderColor: '#B4DBFF',
        borderRadius: 4,
        padding :10,
        margin: 5,
        flexDirection : 'row',
        justifyContent: 'space-between'}}>
        <Text>{text}</Text>
        <Text> + </Text>
    </TouchableOpacity>
}

const Profile = () => {
    return <View style = {{flex : 1, backgroundColor : 'white', paddingTop : 40}} >
        <View style = {{flexDirection : 'row', gap : 60, margin : 20}}>
        <Image style = {{ backgroundColor : "#fff",
       
       
       borderRadius : 100,
       borderWidth : 0.1,
       borderColor : 'gray',
       width : 100,
       height : 100
       }} source={image} />
       <View style = {{padding : 25}}>
       <Text style = {{
            fontWeight : 'bold',
            fontSize : 24,
            
        }}>The Rock</Text>
        <Text>@rocky</Text>
       </View>
       

        </View>
        <Text style = {{
            paddingHorizontal : 15
        }}>Bio</Text>
        <Text style = {{
            fontWeight : 'bold',
            fontSize : 24,
            paddingBottom : 15,
            paddingHorizontal : 15
        }}>
            Hello this is TheRock
        </Text>

        <TextBox text = "Sessions" />
        <TextBox text = "Language" />
        <TextBox text = "Privacy and Security" />
        <TextBox text = "Get Premium" />
        <TextBox text = "Log Out" />
        

    </View>
}

export default Profile