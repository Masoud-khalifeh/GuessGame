import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonNative from "./ButtonNative";

export default function Winner(props) {
    
    return (
        <Modal animationType="slide" >
            <View style={styles.container}>
                <View style={styles.survey}>
                <Text style={styles.text}>Opponent Found Out Your Number !!!</Text>
                <Text style={styles.text}>It Was : {props.winNum} </Text>
                <Text style={styles.text}>Number of Try : {props.tryNum} </Text>
                    <View style={styles.button}>
                        <ButtonNative onPress={props.reset}>Let's Play Again</ButtonNative>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "gray"

    },
    survey: {
        width: "80%",
        height: "20%",
        backgroundColor:"#2e0716",
        marginTop: "10%",
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },

    text: {
        color: "yellow",
        fontSize:20
    },
    textInput: {
        width:"20%",
        borderBottomWidth:3,
        borderBottomColor:"yellow",
        color:"yellow",
        textAlign:"center",
        fontSize:30,
    },
    button: {
        width: "50%",
        height:60
    }
})