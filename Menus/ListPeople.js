import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';

import call from '../Core/ApiCall.js';

import styles from "../css/Styles";

export default class ListPeopleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            people: null
        };
    }

    componentDidMount() {
        let url = 'https://swapi.dev/api/people/';
        call(url).then(
            reponse => {
                const people = reponse.data.results;
                this.setState({
                    isLoading: false,
                    people: people
                });
            }
        );
    }

    openSinglePeople(item) {
        let array_params = item.url.split('/');
        let id = array_params[array_params.length - 2];
        return this.props.navigation.navigate('SinglePeople', {
            itemId: id,
            itemName: item.name
        });
    }

    static options = {
        headerShown: false
    }

    render() {
        return (
            <View style={styles.screenView}>
                {
                    this.state.isLoading ?
                        <ActivityIndicator styles={styles.screenText} /> :
                        <FlatList
                            data={this.state.people}
                            renderItem={({item}) => (
                                <Text style={styles.screenTitle} onPress={() => this.openSinglePeople(item)}>{item.name}</Text>
                            )}
                        />
                }
            </View>
        )
    }
}
