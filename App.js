import React from 'react';

import 'react-native-gesture-handler';
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem
} from '@react-navigation/drawer';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContent } from './DrawerContent';


import Books from './screens/Books';
import {BooksRowContaint} from './screens/Books';
import {OpenBook} from './screens/OpenBook';
import Story from './Stories/Stories'


const Temp2 = () => {
  return (
    <Text>temp2 tab page</Text>
  )
}

 
 
const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
  return (

    <Tab.Navigator
      initialRouteName="Temp"
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarLabelStyle: {
          "fontSize": 12
        },
        // tabBarItemStyle: { width: 100 },
        tabBarStyle: {
          "backgroundColor": "white"
        },
      }}>
      <Tab.Screen name="Books" component={Books} />
      <Tab.Screen name="Stories" component={Story} />
      <Tab.Screen name="jokes" component={Temp2} />
    </Tab.Navigator>

  );
}
 
 
function LogoTitle() {
  return (
    <View style={{ flex: 1, flexDirection: "row", textAlign: "center", justifyContent: 'center', alignItems: 'center' }}>

      <Image
        style={{ width: 40, height: 40, margin: 0, padding: 0 }}
        source={require('./logo.png')}
      />
      <Text style={{ color: 'orange', marginLeft: 10, fontSize: 17, justifyContent: 'flex-start' }}>E-Library</Text>

    </View >
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}  BooksRowContaint={(props) => <BooksRowContaint {...props} />} screenOptions={{
      drawerStyle: {
        backgroundColor: 'white',
        width: 280,
      }, 
      drawerType: 'slide',
    }}>

      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{

          headerStyle: {
            backgroundColor: 'white',
          },

          drawerInactiveTintColor: 'orange',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          drawerStyle: {
            width: 270,
          },

          headerTitle: props => <LogoTitle {...props} />
        }}
      />

      <Drawer.Screen
        name="OpenBook"
        component={OpenBook}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          drawerInactiveTintColor: 'orange',
          drawerStyle: {
            width: 220,
          },
          headerTitle: props => <LogoTitle {...props} />
        }}
      />

    </Drawer.Navigator>
  );
}

const App = () => {

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};


export default App;
