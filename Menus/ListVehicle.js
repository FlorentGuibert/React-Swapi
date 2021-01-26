import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';

import call from '../Core/ApiCall.js';

import styles from "../css/Styles";

export default class ListVehicleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            vehicle: null
        };
    }

    componentDidMount() {
        let url = 'https://swapi.dev/api/starships/';
        call(url).then(
            reponse => {
                const vehicle = reponse.data.results;
                this.setState({
                    isLoading: false,
                    vehicle: vehicle
                });
            }
        );
    }

    openSingleVehicle(item) {
        let array_params = item.url.split('/');
        let id = array_params[array_params.length - 2];
        return this.props.navigation.navigate('SingleVehicle', {
            itemId: id,
            itemName: item.name
        });
    }

    static options = {
        headerShown: false
    }

    render() {
        return (
            <View style={styles.listView}>
                {
                    this.state.isLoading ?
                        <ActivityIndicator styles={styles.screenText} /> :
                        <FlatList
                            data={this.state.vehicle}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => (
                                <Text style={styles.screenTitle} onPress={() => this.openSingleVehicle(item)}>{item.name}</Text>
                            )}
                        />
                }
            </View>
        )
    }
}
