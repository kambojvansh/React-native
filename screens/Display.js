import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';



export default class Display extends Component {
    arr = [{
        uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        name: "Vansh",
        likes: "28",
        comment: { user: "Suraj", text: "nice pic" },
        profileImage: "https://picsum.photos/200/300?grayscale"
    },
    {
        uri: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        name: "Suraj",
        likes: "85",
        comment: { user: "Mohit", text: "nice pic" }
    },
    {
        uri: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
        name: "Mohit",
        likes: "228",
        comment: { user: "Sudhanshu", text: "nice pic" }
    },
    {
        uri: "https://homepages.cae.wisc.edu/~ece533/images/barbara.bmp",
        name: "Sudhanshu",
        likes: "254",
        comment: { user: "Vansh", text: "nice pic" }
    }
    ]
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.arr}
                    renderItem={({ item, index }) => <InstaPost img={item.uri}
                        name={item.name}
                        like={item.likes}
                        comment={item.comment.text}
                        comment_user={item.comment.user} />}
                    keyExtractor={index => index}
                ></FlatList>
            </View>

        );
    }
}

const InstaPost = props => {
    return (
        <View style={styles.main_container}>
            <View style={{ height: 500 }}>
                <View style={{ flex: 0.8, backgroundColor: 'white', justifyContent: "center" }}>
                    <View style={styles.img_container}>

                        <Image style={styles.img} source={require('../Img/happy.png')}></Image>
                        <Text style={styles.textImg}>{props.name}</Text>
                        <Image style={styles.img2} source={require('../Img/option.png')}></Image>

                    </View>
                </View>
                <View style={{ flex: 5, backgroundColor: "white" }}>
                    <Image source={{ uri: props.img }}
                        style={{ flex: 1, width: 500 }}></Image>

                </View>
                <View style={{ flex: 0.7, flexDirection: 'row', backgroundColor: "white", alignItems: "center" }}>
                    <Image style={styles.likeimg} source={require('../Img/like.png')}></Image>
                    <Image style={styles.likeimg} source={require('../Img/conversation.png')}></Image>
                    <Image style={styles.likeimg} source={require('../Img/telegram.png')}></Image>
                    <Image style={[styles.likeimg, { position: "absolute", marginLeft: 370 }]} source={require('../Img/ribbon.png')}></Image>
                </View>
                <View style={{ flex: 0.7, backgroundColor: 'white' }}>
                    <Text style={styles.commentText}>{props.like} Likes</Text>
                    <Text style={styles.commentText}>{props.comment_user} <Text style={{ fontWeight: "normal" }}>
                        {props.comment}
                    </Text></Text>
                </View>
            </View>
        </View>

    )
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
        color: 'black',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    commentText: {
        marginLeft: 10,
        color: "black",
        fontWeight: "bold"
    },
    img2: {
        height: 20,
        width: 20,
        position: 'absolute',
        marginLeft: 370
    },
    likeimg: {
        height: 30,
        width: 30,
        marginLeft: 10,
        margin: 10,
    },
})