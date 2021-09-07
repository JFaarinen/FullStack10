import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight*2,
        paddingLeft: 5,
        paddingBottom: 10,
        backgroundColor: theme.colors.bgSecondary,
        flexDirection: 'row'
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab text='Repositiories' link='/'/>
            <AppBarTab text='Sign in' link='/signIn' />
        </ScrollView>
    </View>
}

export default AppBar;