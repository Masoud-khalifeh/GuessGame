import { Pressable, StyleSheet, Text } from "react-native";


export default function ButtonNative (props){

    return(
        <Pressable  onPress={props.onPress} style={styles.Container}>
            <Text style={styles.text}>{props.children}</Text>
        </Pressable>
    )
}


const styles=StyleSheet.create({
    Container:{
        width:'100%',
        flex:1,
        backgroundColor:"#fc0362",
        marginHorizontal:"4%",
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"

    },
    text:{
        fontSize:18
    }
})
