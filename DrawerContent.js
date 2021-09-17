import React from 'react';
import { View, StyleSheet, ImageBackground, Share, Linking } from 'react-native';
 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
 

export function DrawerContent(props) {

    return (
        <View style={{ flex: 1, margin: 0, padding: 0 }}>
            <DrawerContentScrollView {...props} > 

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home" color={color} size={size} />
                            )}
                            label="HOME"
                            onPress={() => {
                                props.navigation.navigate('Tabjoke1');
                            }}
                        /> 
                    </Drawer.Section>

               
            </DrawerContentScrollView>
 
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
