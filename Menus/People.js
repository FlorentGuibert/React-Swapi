import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SinglePeopleScreen from './SinglePeople.js';
import ListPeopleScreen from './ListPeople.js';

import call from '../Core/ApiCall.js';

import styles from "../css/Styles";

const StackPeople = createStackNavigator();

export default class PeopleScreen extends React.Component {

    static options = {
        tabBarIcon: ({ color, size }) => (
            <Image
            source={require('../assets/people.png')}
            style={{ height: 30, width: 30, tintColor: color}}
            />
        ),
    }

    render() {
        return (
            <StackPeople.Navigator>
              <StackPeople.Screen name="ListPeople" component={ListPeopleScreen} options={ListPeopleScreen.options} />
              <StackPeople.Screen name="SinglePeople" component={SinglePeopleScreen} options={SinglePeopleScreen.options} />
            </StackPeople.Navigator>
        );
    }
}
