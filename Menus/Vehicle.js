import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleVehicleScreen from './SingleVehicle.js';
import ListVehicleScreen from './ListVehicle.js';

import call from '../Core/ApiCall.js';

import styles from "../css/Styles";

const StackVehicle = createStackNavigator();

export default class VehicleScreen extends React.Component {

    static options = {
        tabBarIcon: ({ color, size }) => (
            <Image
            source={require('../assets/vehicle.png')}
            style={{ height: 30, width: 30, tintColor: color}}
            />
        ),
    }

    render() {
        return (
            <StackVehicle.Navigator>
              <StackVehicle.Screen name="ListVehicle" component={ListVehicleScreen} options={ListVehicleScreen.options} />
              <StackVehicle.Screen name="SingleVehicle" component={SingleVehicleScreen} options={SingleVehicleScreen.options} />
            </StackVehicle.Navigator>
        );
    }
}
