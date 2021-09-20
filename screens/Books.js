import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Text,
    useColorScheme,
    ImageBackground,
    View,
    Image,
    Button,
    Linking,
    Share
} from 'react-native';

const Category = [
    { _id: 1, category: "marathii" },
    { _id: 2, category: "Hindi" },
    { _id: 3, category: "english" },
    { _id: 4, category: "telgu" },
    { _id: 5, category: "Tamil" }
];
const BookApi = [
    { _id: 1, category: "marathi", name: "book marathi", img: '../images/thinkandgrowrich.jpg', url: "this is url" },
    { _id: 2, category: "Hindi", name: "book marathi", img: '../images/logo.png', url: "this is url" },
    { _id: 3, category: "marathi", name: "book marathi", img: '../images/thinkandgrowrich.jpg', url: "this is url" },
    { _id: 4, category: "Hindi", name: "book marathi", img: '../images/logo.png', url: "this is url" },
    { _id: 5, category: "Hindi", name: "book marathi", img: '../images/logo.png', url: "this is url" },
    { _id: 6, category: "Hindi", name: "book marathi", img: '../images/logo.png', url: "this is url" },
];

export const BooksRowContaint = ({ navigation }) => {
    return (
        BookApi.map((bookele) => {
            // let ima = element.img;
            // let imaged = {require(`${ima}`)};
            // const image = { uri: "https://reactjs.org/logo-og.png" }
            return (
                <View key={bookele._id}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('OpenBook', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}>
                        <Image source={require("../images/thinkandgrowrich.jpg")} style={styles.book} />
                    </TouchableOpacity >
                </View>
            );
        })
    );
}

const SubBook = ({ navigation }) => {
    return (
        Category.map((element) => {
            return (

                <View key={element._id}>
                    <View style={styles.more}><Text>  {element.category}</Text><Text>See All  </Text></View>

                    <ScrollView horizontal={true} style={styles.main}>
                        <BooksRowContaint navigation={navigation} /> 
                    </ScrollView>
                </View>

            );
        })
    );
}


const Books = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <SubBook navigation={navigation} />
            </ScrollView>
        </>
    )
}


export default Books;



const styles = StyleSheet.create({

    more: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderTopWidth :1,
        // borderTopLeftRadius:5,
    },
    main: {
        marginTop: 5,
        width: '100%',
        minHeight: 170,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    book: {
        backgroundColor: 'white',
        width: 100,
        height: 170
    }
});

