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

const tempbook = require('../Books/tempbook');
const thinkandgrowrich = require('../Books/thinkandgrowrich');

const Category = [
    { _id: 1, category: "English" },
    { _id: 2, category: "Trending" },
    { _id: 3, category: "Business"},
    { _id: 4, category: "Biographies"},
    { _id: 5, category: "Student" },
    { _id: 6, category: "Science" }
];

const BookApi = [
    { _id: 1, category: "English", name: "Think And Grow Rich", img: '../images/thinkandgrowrich.jpg', book:thinkandgrowrich},
 
];

export const BooksRowContaint = ({ navigation, cat }) => {

    return (
        BookApi.map((bookele) => {
            if (bookele.category == cat) {

                return (
                    <View key={bookele._id}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('OpenBook', {
                                itemId: bookele._id,
                                book: bookele.book
                            });
                        }}>
                            <Image source={require('../images/thinkandgrowrich.jpg')} style={styles.book} />
                        </TouchableOpacity >
                    </View>
                );
            }


        })
    );
}

const SubBook = ({ navigation }) => {
    return (
        Category.map((element) => {
            return (

                <View key={element._id}>
                    <View style={styles.more}><Text style={{ color: "orange" }}>  {element.category}</Text><Text style={{ color: "orange" }}>See All  </Text></View>

                    <ScrollView horizontal={true} style={styles.main}>
                        <BooksRowContaint cat={element.category} navigation={navigation} />
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

