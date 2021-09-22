import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    Linking,
    Share
} from 'react-native';


export const OpenBook = ({ route, navigation }) => {

    let {book} = route.params;

    // const BookApi = require(`../Books/book/${img}`);
 
    return (
        <View>
            <ScrollView>
                <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold" }}>  </Text>
                <Text>
                {book.book}
                </Text>
            </ScrollView>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    }
});