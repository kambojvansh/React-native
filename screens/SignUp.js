import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
class SignUp extends Component {
    render() {
        return (
            <View style={styles.views}>
                <Text style={styles.text}>
                    Welcome to SignUp Page
                </Text>

            </View>

        );
    };

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'red'
    },
    views: {
        alignItems: 'center'
    }
});

export default SignUp;