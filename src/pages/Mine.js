
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,TextInput
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from './Register.js'
import Login from './Login.js'

const Tab = createBottomTabNavigator();

class Mine extends React.Component{

    render(){
        const routerInfo = this.props.route.params;
        return (

                <Tab.Navigator>
                        <Tab.Screen name="Login" component={Login} />
                        <Tab.Screen name="Register" component={Register} />
                </Tab.Navigator>

        )
    }
}

export default Mine;
