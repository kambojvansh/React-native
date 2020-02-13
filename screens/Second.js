import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Second extends Component {
    state = {
        Name: ''
    }
    textHander = (text) => {
        this.setState({ Name: text })
    }
    render() {
        return (
            <View style={styles.views}>
                <Text style={styles.text}>
                    Welcome to second page
                </Text>
                <TextInput style={styles.input}
                    placeholder="Enter Your name "
                    onChangeText={this.textHander}
                />

                <View>
                    {(this.state.Name.length <= 15) ?
                        <Text>
                            Your Name is <Text style={styles.namee}>{this.state.Name}</Text>
                        </Text> :
                        <Text style={styles.textError}>Name not allow</Text>}

                </View>

            </View>

        );
    };
}

const styles = StyleSheet.create({
    textError: {
        fontSize: 25,
        color: 'red'
    },
    views: {
        alignItems: 'center'
    },
    input: {
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
        width: 200,
        height: 40
    },
    namee: {
        fontStyle: "italic",
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 30,
        color: 'blue'
    }
});
