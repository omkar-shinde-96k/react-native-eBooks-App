import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
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
    { category: "marathi" },
    { category: "Hindi" },
    { category: "english" },
    { category: "telgu" },
    { category: "Tamil" }
];
const BookApi = [
    { id: 1, category: "marathi", name: "book marathi", img: '../images/thinkandgrowrich.jpg', url: "this is url" },
    { id: 2, category: "Hindi", name: "book marathi", img: '../images/logo.png', url: "this is url" },
    { id: 1, category: "marathi", name: "book marathi", img: '../images/thinkandgrowrich.jpg', url: "this is url" },
    { id: 2, category: "Hindi", name: "book marathi", img: '../images/logo.png', url: "this is url" },

];

export const BooksRowContaint = ({ navigation }) => {
    return (
        BookApi.map((element) => {
            let ima = element.img;
            // let imaged = {require(`${ima}`)};
            // const image = { uri: "https://reactjs.org/logo-og.png" }
            return (
                <>
            
                    <Image source={require("../images/thinkandgrowrich.jpg")} style={styles.book} />

                        {/* <Text onPress={() => navigation.navigate('OpenBook')} > </Text> */}
              
                </>
            );
        })
    );
}

const SubBook = ({ navigation }) => {
    return (
        Category.map((element) => {
            return (
                <>
                    <ScrollView key={element.category} horizontal={true} style={styles.main}>
                        <BooksRowContaint navigation={navigation} />
                        {/* <Text onPress={() => navigation.navigate('OpenBook')} >click </Text> */}
                    </ScrollView>
                </>
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
    main: {
        marginTop: 20,
        width: '100%',
        minHeight: 170,
        backgroundColor: 'gray',
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

