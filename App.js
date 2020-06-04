import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,TextInput,Alert,Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/Home.js'
import MineScreen from './src/pages/Mine.js'

const RootStack = createStackNavigator();

class App extends React.Component {
  render() {
    return (<NavigationContainer>
                 <RootStack.Navigator
                 tabBarOptions={{
                        activeTintColor: 'red',
                        inactiveTintColor: 'green',
                 }}
                  screenOptions={({ route }) => ({
                       tabBarIcon: ({ focused, color, size }) => {
                            let txtcontent;
                         if(route.name == 'Login'){
                           txtcontent = 1;
                         }else{
                            txtcontent = 2;
                         }
                         return <Text style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}>{txtcontent}</Text>;
                       },
                     })}>
                    <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
                    <RootStack.Screen name="MineScreen" component={MineScreen}/>
                 </RootStack.Navigator>
            </NavigationContainer>)
  }
}

export default App;
