import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import ButtonNative from "./ButtonNative";
import { useState } from "react";

export default function OpponentGuess(props) {
    const [inputNum, setInputNum] = useState("");

    function changeHandler(evt) {
        setInputNum(evt)
    }

    return (
        <Modal animationType="slide" >
            <View style={styles.container}>
                <Text style={styles.textMain}>Guess My Number</Text>
                <View style={styles.survey}>
                    <Text style={styles.text}>Enter a Number</Text>
                    <TextInput style={styles.textInput} name="num" id="num" value={inputNum} onChangeText={changeHandler} placeholder="0" placeholderTextColor="white"/>
                    <View style={styles.button}>
                        <ButtonNative onPress={() => props.add(inputNum)}>Let's Play</ButtonNative>
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
        backgroundColor: "gray"

    },
    textMain: {
        color: "white",
        fontSize: 30,
        fontWeight: 600,
        borderColor: "white",
        borderWidth: 1,
        padding: "5%",
        marginTop: "40%"
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