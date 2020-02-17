import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
// var Person = function () { };
// Person.prototype.init = function (name) {
//     this.name = name;
// }
// Person.prototype.Display = function () {
//     return this.name;
// }

// var person_name = new Person();
// person_name.init("vansh");

export default class HomeScreen extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert("Invalid id and pass " + 'email: ' + email + ' password: ' + pass)
    }
    render() {
        let valid = 0;
        vansh = "vansh";

        return (
            <View style={styles.views}>
                <Text style={styles.text}>
                    This is first Page
                </Text>
                <Button title="Click here->"
                    onPress={() => { this.props.navigation.navigate('Second') }} />

                <View style={styles.container}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handlePassword} />

                    <Button
                        style={styles.submitButton}
                        onPress={
                            () => {
                                if ((this.state.email == "vansh") && (this.state.password == "123")) {
                                    this.props.navigation.navigate('Second')
                                    valid = 1;
                                }
                                else {
                                    this.login(this.state.email, this.state.password)
                                }
                            }
                        }
                        title="submit" />
                </View>
                <Button
                    title="Go to Display Page"
                    onPress={() => { this.props.navigation.navigate('Display') }} />
                <View style={styles.btn}>
                    <Button title='Calculator'
                        onPress={() => { this.props.navigation.navigate('Calculator') }} />
                </View>

                <View style={styles.btn}>
                    <Button title='Color'
                        onPress={() => { this.props.navigation.navigate('Color') }} />
                </View>

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
    },
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        width: 250,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    },
    btn: {
        marginVertical: 20,
    }
});