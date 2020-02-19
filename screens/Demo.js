import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
export default class Demo extends Component {

    state = {
        currentValue: "",
        previousValue: null,
        operator: null,
        result: "0",
        dot: null

    }
    val = 0
    remove = ""
    handleTap = (type, value) => {
        this.setState(state => this.calculat(type, value, state));
    };
    calculat = (type, value, state) => {

        switch (type) {
            case "clear":
                return {
                    currentValue: "",
                    result: "0",
                    dot: null,
                    operator: null
                }
            case "equal":
                // if (this.state.result != "0")
                //     return {
                //         currentValue: state.result,
                //         result: "0"

                //     }
                if (state.operator) {
                    return
                }
                this.val = eval(this.state.currentValue)
                this.setState({ result: this.val })
                return
            case "number":
                // if (this.state.result != "o")
                //     return {
                //         currentValue: value,
                //         result: "o"

                //     }

                return {
                    currentValue: state.currentValue + value,
                    operator: null,

                }
            case "operator":
                if (state.currentValue == "")
                    return;
                this.setState({ currentValue: this.state.currentValue + value })
                return {
                    operator: value,
                    dot: null
                }
            case "percentage":
                return {
                    result: `${parseFloat(state.currentValue) * 0.01}`,
                };
            case "back":
                this.remove = state.currentValue.substring(0, state.currentValue.length - 1);
                return {
                    currentValue: this.remove
                }

        }
    }



    render() {
        return (

            /* Main container */

            <View style={styles.main_container}>
                <View style={styles.resultContainer}>
                    {/* Top Text Box */}

                    <Text style={{
                        fontSize: 30, marginRight: 15, marginTop: 10, color: '#bcbcbc',

                    }}>
                        {/* {(this.state.curruntValueShow).toLocaleString()} */}

                        {this.state.currentValue}
                    </Text>

                    {/* Second Text Box */}

                    <Text style={{ fontSize: 40, marginRight: 10, color: '#00b300', marginTop: 90 }}>
                        {/* {parseFloat(this.state.currentValue).toLocaleString()} */}
                        {this.state.result}

                    </Text>
                </View>

                <View style={{ flex: 1.7, backgroundColor: 'white', justifyContent: "center" }}>

                    {/* For First Row Buttons*/}

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Buttons
                            title={"C"}
                            style={{ color: "red" }}
                            onClick={() => {
                                this.handleTap("clear")
                            }} />

                        <Buttons
                            title={"<-"}
                            style={{ color: "green" }}
                            onClick={() => {
                                this.handleTap("back")
                            }} />

                        <Buttons
                            title={"%"}
                            style={{ color: "green" }}
                            onClick={() => {
                                this.handleTap("percentage")
                            }} />

                        <Buttons
                            title={"/"}
                            style={{ color: "green" }}
                            onClick={() => {
                                if (this.state.operator)
                                    return;
                                this.handleTap("operator", "/")
                            }} />
                    </View>

                    {/* For Second Row Buttons*/}

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Buttons
                            title={"7"}
                            onClick={() => {
                                this.handleTap("number", "7")
                            }} />

                        <Buttons
                            title={"8"}
                            onClick={() => {
                                this.handleTap("number", 8)
                            }} />

                        <Buttons
                            title={"9"}
                            onClick={() => {
                                this.handleTap("number", 9)
                            }} />

                        <Buttons
                            title={"X"}
                            style={{ color: "green" }}
                            onClick={() => {
                                if (this.state.operator)
                                    return;
                                this.handleTap("operator", "*")
                            }} />
                    </View>

                    {/* For Therd Row Buttons*/}

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Buttons
                            title={"4"}
                            onClick={() => {
                                this.handleTap("number", 4)
                            }} />

                        <Buttons
                            title={"5"}
                            onClick={() => {
                                this.handleTap("number", 5)
                            }} />

                        <Buttons
                            title={"6"}
                            onClick={() => {
                                this.handleTap("number", 6)
                            }} />

                        <Buttons
                            title={"-"}
                            style={{ color: "green", fontSize: 60 }}
                            onClick={() => {
                                if (this.state.operator)
                                    return;
                                this.handleTap("operator", "-")
                            }} />
                    </View>
                    {/* For 4th Row Buttons*/}

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Buttons
                            title={"1"}
                            onClick={() => {
                                this.handleTap("number", 1)
                            }} />

                        <Buttons
                            title={"2"}
                            onClick={() => {
                                this.handleTap("number", 2)
                            }} />

                        <Buttons
                            title={"3"}
                            onClick={() => {
                                this.handleTap("number", 3)
                            }} />

                        <Buttons
                            title={"+"}
                            style={{ color: "green" }}
                            onClick={() => {
                                if (this.state.operator)
                                    return;
                                this.handleTap("operator", "+")
                            }} />
                    </View>

                    {/* For 5th Row Buttons*/}

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Buttons
                            title={"+/-"}
                            onClick={() => {
                                this.handleTap("reverse")
                            }} />

                        <Buttons
                            title={"0"}
                            onClick={() => {
                                this.handleTap("number", 0)
                            }} />

                        <Buttons
                            title={"."}
                            onClick={() => {
                                if (this.state.dot)
                                    return;
                                this.handleTap("number", ".")
                                this.setState({ dot: "." })

                            }} />

                        <Buttons
                            title={"="}
                            style={{ color: "white" }}
                            btnstyle={{ backgroundColor: 'green' }}
                            onClick={() => {
                                this.handleTap("equal")
                            }} />
                    </View>

                </View>
            </View>
        )
    }


}

//Component for button show 

const Buttons = props => {
    return (
        <TouchableOpacity style={[styles.touchtext, props.btnstyle]}
            onPress={() => props.onClick()}>

            <Text style={[styles.text, props.style]}>{props.title}</Text>

        </TouchableOpacity>
    )
}

//Code for Styles 

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'white'
    },
    resultContainer: {
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 10,
        borderBottomColor: '#ededed',
        backgroundColor: 'white',
        borderColor: 'white',
        alignItems: 'flex-end'
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