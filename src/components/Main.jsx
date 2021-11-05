import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import RepositoryReview from './RepositoryReview';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.bgPrimary,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList/>
                </Route>
                <Route path='/signIn'>
                    <SignIn />
                </Route>
                <Route path='/repositoryReview'>
                    <RepositoryReview />
                </Route>
                <Route path='/repository/:id'> 
                    <SingleRepository />
                </Route>
                <Route path='/signUp'>
                    <SignUp />
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    );
};

export default Main;