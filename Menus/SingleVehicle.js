import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, LogBox } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import call from '../Core/ApiCall.js';

import styles from "../css/Styles";

export default class SingleVehicleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            vehicle: null
        };
    }

    componentDidMount() {
        let id = this.props.route.params.itemId;
        let url = 'https://swapi.dev/api/starships/' + id;
        document.title = this.props.route.params.itemName;
        call(url).then(
            reponse => {
                const vehicle = reponse.data;
                this.setState({
                    isLoading: false,
                    vehicle: vehicle
                });
            }
        );
    }

    static options = ({route}) => ({
        title: route.params.itemName,
        headerStyle: {
            backgroundColor: '#272b30'
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerTintColor: '#fff'
    })

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.screenView}>
                    <ActivityIndicator styles={styles.screenText} />
                </View>
            );
        }
        return (
            <View style={styles.screenView}>
                <Text style={styles.screenTitle}>{this.state.vehicle.name}</Text>
                <Text style={styles.screenText}>Model: {this.state.vehicle.model}</Text>
                <Text style={styles.screenText}>Cost: {this.state.vehicle.cost_in_credits} credits</Text>
            </View>
        );
    }
}
