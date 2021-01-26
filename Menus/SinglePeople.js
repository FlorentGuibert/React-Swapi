import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, LogBox } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import call from '../Core/ApiCall.js';

import styles from "../css/Styles";

export default class SinglePeopleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            people: null
        };
    }

    componentDidMount() {
        let id = this.props.route.params.itemId;
        let url = 'https://swapi.dev/api/people/' + id;
        document.title = this.props.route.params.itemName;
        call(url).then(
            reponse => {
                const people = reponse.data;
                this.setState({
                    isLoading: false,
                    people: people
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
                <Text style={styles.screenTitle}>{this.state.people.name}</Text>
                <Text style={styles.screenText}>Height: {this.state.people.height} cm</Text>
                <Text style={styles.screenText}>Mass: {this.state.people.mass} kg</Text>
                <Text style={styles.screenText}>Hair color: {this.state.people.hair_color}</Text>
                <Text style={styles.screenText}>Skin color: {this.state.people.skin_color}</Text>
                <Text style={styles.screenText}>Eye color: {this.state.people.eye_color}</Text>
                <Text style={styles.screenText}>Gender: {this.state.people.gender}</Text>
            </View>
        );
    }
}
