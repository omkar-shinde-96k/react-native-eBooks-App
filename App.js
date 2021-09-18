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
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem
} from '@react-navigation/drawer';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Temp = ({ navigation }) => {
  return (
    <View>
      <Text>temp tab page </Text>

    </View>
  )
}
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
          "backgroundColor": "powderblue"
        },
      }}>
      <Tab.Screen name="Books" component={Temp} />
      <Tab.Screen name="Stories" component={Temp2} />
      <Tab.Screen name="jokes" component={Temp2} />
    </Tab.Navigator>

  );
}

const HeaderStack1 = ({ navigation }) => {
  return (
    <View>
      <Text>Drawer 2</Text>
      <Button
        title="Go somewhere"
        onPress={() => {
          navigation.navigate('HeaderStack');
        }}
      />
    </View>
  )
}
const HeaderStack2 = () => {
  return (
    <Text>Drawer 3</Text>
  )
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        screenOptions={{
          activeTintColor: "pink",
          tabBarLabelStyle: {
            "fontSize": 12
          }
        }}
      />

      <DrawerItem
        label="HOME"
        onPress={() => {
          props.navigation.navigate('Notifications');
        }}

      />

      <Button
        title="Go somewhere"
        onPress={() => {
          props.navigation.navigate('Notifications');
        }}
      />


    </DrawerContentScrollView>
  );
}

function LogoTitle() {
  return (
    <View style={{flex:1,flexDirection: "row", textAlign: "center",justifyContent:'center',alignItems:'center'}}>
     
      <Image
        style={{ width: 40, height: 40,margin:0,padding:0}}
        source={require('./logo.png')}
      /> 
          <Text style={{color: 'orange',marginLeft:10, fontSize: 17, justifyContent:'flex-start'}}>Books Lab</Text>
   
    </View >
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
      drawerStyle: {
        backgroundColor: 'white',
        width: 240,
      },
      drawerType: 'slide', 
    }}>

      <Drawer.Screen
        name="Books Lab"
        component={MyTabs}
        options={{
          headerStyle: {
            backgroundColor: 'powderblue',
          },
          drawerLabel: 'Home',
          headerTintColor: 'orange',
          drawerInactiveTintColor:'red',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20, 
          },
          drawerStyle: {
            width: 220, 
          },
          headerTitle: props => <LogoTitle {...props}  />
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={HeaderStack1}
        options={{ drawerLabel: 'HeaderStack1' }}
      />
      <Drawer.Screen
        name="SubFeeda"
        component={HeaderStack2}
        options={{ drawerLabel: 'SubFeed' }}
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
      <MyDrawer/>
    </NavigationContainer>
  );
};


export default App;
