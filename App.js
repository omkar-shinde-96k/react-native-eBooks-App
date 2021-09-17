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
} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';  



const Temp = () => {
  return (
    <Text>temp tab page</Text>
  )
}
const Temp2 = () => {
  return (
    <Text>temp2 tab page</Text>
  )
} 

// const Tab = createMaterialTopTabNavigator();
// const MyTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Temp" component={Temp} />
//       <Tab.Screen name="Temp2" component={Temp2} />
//     </Tab.Navigator>
//   );
// }


const HeaderStack = () => {
  return (
    <Text>Homed </Text>
  )
}
const HeaderStack1 = () => {
  return (
    <Text>Drawer 2</Text>
  )
}
const HeaderStack2 = () => {
  return (
    <Text>Drawer 3</Text>
  )
}
 
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="BOOKS LAB"
        component={HeaderStack}
        options={{ drawerLabel: 'Home' }}
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
      <MyDrawer />
    </NavigationContainer>
  );
};


export default App;
