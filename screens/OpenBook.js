import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    Linking,
    Share
} from 'react-native';

export const OpenBook = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>full book show here</Text>
    
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    )
}