import { FlatList, StyleSheet, Text, View, } from "react-native";
import Guess from '../Components/Guess';
import OpponentGuess from '../Components/OpponentGuess';
import { useState } from "react";
import uuid from 'react-native-uuid';

export default function FirstPage() {
    const [opponentGuess, setOpponentGuess] = useState("");
    const [isWinner, setIsWinner] = useState(false);
    const [logNum, setLogNum] = useState([]);
    const [currentNum, setCurrentNum] = useState("");

  
    function addNum(num) {
        if (!isWinner) {
            setLogNum([...logNum, { id: uuid.v4(), num: num }]);
            setCurrentNum(num);
            if (opponentGuess == num) {
                setIsWinner(true);
                console.log("winnerrrrrrr")
            }
        }

    }


    function firtUpdateCurrentNum(num) {
        setCurrentNum(num);
    }

    function addOpponentGuess(num) {
        setOpponentGuess(num);
    }



    return (
        <View style={styles.container}>
            {!opponentGuess && <OpponentGuess add={addOpponentGuess} />}
            <View style={styles.header}>
                <Text style={styles.headerText}>Opponent's Guess</Text>
            </View>
            <View style={styles.showNum}>
                <Text style={styles.showNumText}>{currentNum}</Text>
            </View>
            <View style={styles.chooseNav}>
                <Guess add={addNum} firtUpdate={firtUpdateCurrentNum} />
            </View >
            <View style={styles.flatList}>
                <FlatList
                    data={[...logNum].reverse()}
                    renderItem={({ item, index }) => (
                        <View key={item.id} style={styles.flatlistItem}>
                            <Text>#{index+1}</Text>
                            <Text >Opponent's Guess: {item.num}</Text>
                        </View>
                    )} />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "gray",
        flex: 1
    },
    header: {
        width: "80%",
        height: "7%",
        borderWidth: 2,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontWeight: 600
    },
    showNum: {
        width: "70%",
        borderWidth: 2,
        borderColor: "yellow",
        marginTop: "3%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    showNumText: {
        color: "yellow",
        fontSize: 30,
        fontWeight: 600
    },
    chooseNav: {
        width: "70%",
        flex: 1,
        marginTop: "10%"
    },
    flatList: {
        width: "75%",
        flex: 3,
        marginBottom: "20%",
        marginTop: "5%"
    },
    flatlistItem: {
        backgroundColor: "yellow",
        borderRadius: 7,
        marginBottom: 10,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    }

})