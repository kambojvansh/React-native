import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



export default class Display extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={{ height: 500 }}>
                    <View style={{ flex: 0.8, backgroundColor: 'black', justifyContent: "center" }}>
                        <View style={styles.img_container}>

                            <Image style={styles.img} source={require('../Img/happy.png')}></Image>
                            <Text style={styles.textImg}>vansh</Text>
                            <Image style={styles.img2} source={require('../Img/op.jpg')}></Image>

                        </View>
                    </View>
                    <View style={{ flex: 5, backgroundColor: "white" }}>
                        <Image source={require("../Img/status.jpg")}
                            style={{ flex: 1, width: 500 }}></Image>

                    </View>
                    <View style={{ flex: 0.7, backgroundColor: 'black' }}></View>
                    <View style={{ flex: 0.7, backgroundColor: 'black' }}>
                        <Text style={styles.commentText}>38 likes</Text>
                        <Text style={styles.commentText}>User123 <Text style={{ fontWeight: "normal" }}>
                            Nice Pic
                            </Text></Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'gray',

    },
    child_container: {
        flex: 1,
        backgroundColor: "green",
        margin: 5
    },
    img: {
        height: 40,
        width: 40,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    img_container: {
        marginLeft: 10,
        alignItems: "center",
        flexDirection: "row"

    },
    textImg: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    commentText: {
        marginLeft: 10,
        color: "white",
        fontWeight: "bold"
    },
    img2: {
        height: 40,
        width: 40,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        marginLeft: 350
    },
})