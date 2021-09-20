import React from 'react';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, DrawerItem
} from '@react-navigation/drawer';

import { View, StyleSheet, ImageBackground, Share, Linking, Button,Text } from 'react-native';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from 'react-native-paper';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}

            <ImageBackground

                source={require('./logo.png')}

                style={{ width: '100%', height: 100 }}>
                <Text style={{color:"black",fontWeight:"bold",justifyContent:"center", alignItems:"center"}}>FREE HINDI BOOKS </Text>
            </ImageBackground>

            <DrawerItem
                icon={({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                )}
                label="HOME"
                onPress={() => {
                    props.navigation.navigate('Books');
                }}
            />

            <DrawerItem
                icon={({ color, size }) => (
                    <Icon name="sticker-emoji" color={color} size={size} />
                )}
                label="Wallpaper"
                onPress={() => {
                    props.navigation.navigate('OpenBook');
                }}
            />


            <DrawerItem
                icon={({ color, size }) => (
                    <Icon name="bookmark-outline" color={color} size={size} />
                )}
                label=" Support us"
                onPress={() => {
                    props.navigation.navigate('OpenBook');
                }}
            />


            <DrawerItem
                icon={({ color, size }) => (
                    <Icon name="sharealt" color={color} size={size} />
                )}
                label="Share App"
                onPress={async () => {
                    try {
                        const result = await Share.share({
                            message: "http://bit.do/download-app-now",
                        });
                        if (result.action === Share.sharedAction) {
                            if (result.activityType) {
                                // console.log('shared type')   
                            } else {
                                console.log('shared')  // shared
                            }
                        } else if (result.action === Share.dismissedAction) {
                            console.log('dismissed')  // dismissed
                        }
                    } catch (error) {
                        alert(error.message);
                    }
                }}
            />



            <DrawerItem icon={({ color, size }) => (
                <Icon name="gmail" color={color} size={size} />
            )}
                label="gmail"
                onPress={() => {
                    Linking.openURL('http://instagram.com/omkar_shinde.96k')
                }}
            />

            <DrawerItem icon={({ color, size }) => (
                <Icon name="instagram" color={color} size={size} />
            )}
                label="instagram"
                onPress={() => {
                    Linking.openURL('http://instagram.com/omkar_shinde.96k')
                }}
            />









        </DrawerContentScrollView>
    );
}
