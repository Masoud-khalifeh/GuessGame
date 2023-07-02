import { StyleSheet, Text, View } from "react-native";
import ButtonNative from './ButtonNative';
import { useState, useEffect } from "react";


export default function (props) {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(99);
    const [num, setNum] = useState("");


    useEffect(() => {
        props.firtUpdate(Math.floor(Math.random() * (max - min )) + min)
    }, [])


    useEffect(() => {
        const newNum = Math.floor(Math.random() * (max - min-1 )) + (min+1)
        setNum(newNum);
        props.add(newNum)
    }, [min, max])



  
    function pressHandle(navigation) {
        if (navigation === "inc") {
            setMin(num);
        } else if (navigation === "dec") {
            setMax(num);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Higher or Lower?</Text>
            <View style={styles.buttonContainer}>
                <ButtonNative onPress={() => pressHandle("inc")}>Add</ButtonNative>
                <ButtonNative onPress={() => pressHandle("dec")}>Reduce</ButtonNative>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2e0716"
    },
    text: {
        color: "yellow",
        fontSize: 20,
        fontWeight: 500
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "8%",
        marginHorizontal: "5%"
    },
    button: {

    }
})

