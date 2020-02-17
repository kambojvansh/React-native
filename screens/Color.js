import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default class Color extends Component {
    red = 0
    green = 0
    blue = 0
    state = {
        R: 0,
        G: 0,
        B: 0
    }
    setColor = () => {
        if ((this.red <= 255 && this.red >= 0) && (this.green <= 255) && (this.blue <= 255))
            this.setState({ R: parseInt(this.red), G: parseInt(this.green), B: parseInt(this.blue) })
        else
            alert("value not allow")

    }
    render() {
        return (
            <View style={styles.main_container}>
                <View style={[styles.color_container,
                { backgroundColor: `rgb(${this.state.R},${this.state.G},${this.state.B})` }]}>
                </View>

                <View style={styles.viewtext}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={styles.text}>R</Text>
                        <Text style={styles.text}>G</Text>
                        <Text style={styles.text}>B</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TextInput style={styles.textinput}
                            placeholder="0"
                            // onChangeText={(value) => { this.setState({ R: value }) }}
                            onChangeText={(value) => { this.red = value }}
                            keyboardType="numeric"
                            maxLength={3}
                        ></TextInput>
                        <TextInput style={styles.textinput}
                            // onChangeText={(value) => { this.setState({ G: value }) }}
                            onChangeText={(value) => { this.green = value }}
                            placeholder="0"
                            keyboardType="numeric"
                            maxLength={3}
                        ></TextInput>
                        <TextInput style={styles.textinput}
                            // onChangeText={(value) => { this.setState({ B: value }) }}
                            onChangeText={(value) => { this.blue = value }}
                            placeholder="0"
                            keyboardType="numeric"
                            maxLength={3}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => { this.setColor() }}
                        >
                            <Text style={styles.btn}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.R >= 255)
                                        return
                                    this.setState({ R: this.state.R + 1 })
                                }}
                            >
                                <Text style={styles.btn}>+</Text>
                            </TouchableOpacity>
                            <Text style={[styles.btnTextview, { backgroundColor: `rgb(${this.state.R},0,0)` }]}>{this.state.R}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.R <= 0)
                                        return
                                    this.setState({ R: this.state.R - 1 })
                                }}
                            >
                                <Text style={styles.btn}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.G >= 255)
                                        return
                                    this.setState({ G: this.state.G + 1 })
                                }}
                            >
                                <Text style={styles.btn}>+</Text>
                            </TouchableOpacity>
                            <Text style={[styles.btnTextview, { backgroundColor: `rgb(0,${this.state.G},0)` }]}>{this.state.G}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.G <= 0)
                                        return
                                    this.setState({ G: this.state.G - 1 })
                                }}
                            >
                                <Text style={styles.btn}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.B >= 255)
                                        return
                                    this.setState({ B: this.state.B + 1 })
                                }}
                            >
                                <Text style={styles.btn}>+</Text>
                            </TouchableOpacity>
                            <Text style={[styles.btnTextview, { backgroundColor: `rgb(0,0,${this.state.B})` }]}>{this.state.B}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.B <= 0)
                                        return
                                    this.setState({ B: this.state.B - 1 })
                                }}
                            >
                                <Text style={styles.btn}>-</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        backgroundColor: 'white',
        flex: 1,
    },
    color_container: {
        borderWidth: 2,
        borderBottomColor: 'black',
        marginHorizontal: 50,
        height: 250,
        marginVertical: 20,
    },
    viewtext: {
        backgroundColor: 'skyblue',
        flex: 1
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 30
    },
    textinput: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 15,
        color: 'white',
        borderWidth: 1,
    },
    btn: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 15,
        color: 'white',
        margin: 25,
        width: 100,
        backgroundColor: 'orange',
        textAlign: 'center',
        borderRadius: 50
    },
    btnTextview: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 15,
        color: 'white',
        width: 100,
        backgroundColor: 'orange',
        textAlign: 'center',
    }
})

