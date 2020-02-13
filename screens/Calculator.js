import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import calculator, { initialState } from "../screens/CalculatorDemo/calculator";

export default class Calculator extends Component {

    state = initialState;

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };
    render() {

        return (
            <View style={styles.main_container}>
                <View style={{
                    borderWidth: 1,
                    flex: 1,
                    marginHorizontal: 10,
                    borderBottomColor: '#ededed',
                    border: 1,
                    backgroundColor: 'white',
                    borderColor: 'white',
                    alignItems: 'flex-end'
                }}>


                    <Text style={{ fontSize: 40, marginRight: 10, color: '#00b300' }}>
                        {parseFloat(this.state.currentValue).toLocaleString()}
                    </Text>
                    <Text style={{
                        fontSize: 30, marginRight: 10, color: '#bcbcbc',
                        marginTop: 90

                    }}>
                        {(this.state.curruntValueShow).toLocaleString()}
                    </Text>

                </View>
                <View style={{ flex: 1.7, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("clear")}
                        >
                            <Text style={[styles.text, { color: 'red' }]}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext} >
                            <Text style={styles.greenText}>( )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("percentage")}
                        >
                            <Text style={styles.greenText}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("operator", "/")}
                        >
                            <Text style={styles.greenText}>/</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 7)}
                        >
                            <Text style={styles.text}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 8)}
                        >
                            <Text style={styles.text}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 9)}
                        >
                            <Text style={styles.text}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("operator", "*")}
                        >
                            <Text style={styles.greenText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 4)}
                        >
                            <Text style={styles.text}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 5)}
                        >
                            <Text style={styles.text}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 6)}
                        >
                            <Text style={styles.text}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("operator", "-")}
                        >
                            <Text style={[styles.greenText, { fontSize: 60 }]}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 1)}
                        >
                            <Text style={styles.text}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 2)}
                        >
                            <Text style={styles.text}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 3)}
                        >
                            <Text style={styles.text}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("operator", "+")}
                        >
                            <Text style={styles.greenText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("posneg")}
                        >
                            <Text style={styles.text}>+/-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", 0)}
                        >
                            <Text style={styles.text}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchtext}
                            onPress={() => this.handleTap("number", ".")}
                        >
                            <Text style={styles.text}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.touchtext, { backgroundColor: '#00b300' }]}
                            onPress={() => this.handleTap("equal")}
                        >
                            <Text style={[styles.text, { color: 'white' }]}>=</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View >
        )
    }

}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'white'
    },
    touchtext: {
        margin: 10,
        backgroundColor: '#ededed',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        height: 70,
        width: 80,
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'normal'
    },
    greenText: {
        color: '#00b300',
        fontSize: 30
    }



})