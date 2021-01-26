import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeopleScreen from './Menus/People.js';
import VehicleScreen from './Menus/Vehicle.js';
import styles from "./css/Styles";

const Tab = createBottomTabNavigator();

let tabBarOptions = {
    labelPosition: 'below-icon',
    adaptive: false,
    activeTintColor: '#ffe300',
    inactiveTintColor: '#fff',
    activeBackgroundColor: '#1c1e22',
    inactiveBackgroundColor: '#272b30',
};

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={tabBarOptions}>
                    <Tab.Screen name="People" component={PeopleScreen} options={PeopleScreen.options} />
                    <Tab.Screen name="Vehicle" component={VehicleScreen} options={VehicleScreen.options} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
