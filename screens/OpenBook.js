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

// import Pdf from 'react-native-pdf';
  
export const OpenBook = ({route,navigation }) => {
    const { itemId, otherParam } = route.params;
    const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    return (
        <View>
        <Text>full book show here , {itemId}</Text> 
      <Button title="Go back" onPress={() => navigation.goBack()} />
{/* 
        <Pdf
                    source={source} /> */}
                    

    </View>
    )
}