import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Display2 extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={styles.child_container}></View>
                    <View style={styles.child_container}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'gray',
        // flexDirection: 'column'

    },
    child_container: {
        flex: 1,
        backgroundColor: "green",
        margin: 5
    }
})