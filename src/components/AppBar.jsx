import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import Text from './Text';

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
    const [user, setUser] = useState(null);
    const result = useQuery(GET_USER);
    const authStorage = useAuthStorage();
    const client = useApolloClient();

    useEffect(() => {
        console.log('effect...')
        console.log('user at start', user);
        console.log(result.data);
        if (result.data) {
            setUser(result.data.authorizedUser);
            console.log('set user ', user);
        }
        if (user) {
            console.log('user ', user);
        } else {
            console.log('no user');
        }
        console.log('user at end', user);
    }, [result]);

    const signOut = async () => {
        console.log('logging out...');
        await authStorage.removeAccessToken();
        client.resetStore();
    }

    if (result.loading) {
        return <Text>loading...</Text>
    }

    return(
    <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab text='Repositiories' link='/'/>
            {!user 
            ? <AppBarTab text='Sign in' link='/signIn' />
            : <Pressable onPress={signOut}><Text 
            color='appBar' 
            fontWeight='bold'
            fontSize='subheading'>
                Sign out</Text></Pressable>}                     
        </ScrollView>
    </View>
    );
}

export default AppBar;