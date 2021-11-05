import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';
import theme from '../theme';
import { GET_USER } from '../graphql/queries';
import AppBarTab from './AppBarTab';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
    appBar: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: theme.colors.bgSecondary,
      display: "flex",
      flexDirection: "row",
    }
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const accessToken = authStorage.getAccessToken();

  let authorizedUser = null;

  if (accessToken) {
    const { data } = useQuery(GET_USER, {
      fetchPolicy: 'cache-and-network'
    });

    if (data) {
      data.authorizedUser !== null ?
        authorizedUser = data.authorizedUser
        :
        authorizedUser = null;
    }

  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <Link to='/' text={'Repositories'} component={AppBarTab}/>
        {authorizedUser ?
          <>
            <Link to='/repositoryReview' text='Review' component={AppBarTab} />
            <Link to='/MyReviews' text='My reviews' component={AppBarTab} />
            <Link to='/' text={'Sign out'} component={AppBarTab} onPress={signOut}/>
          </>
          :
          <>
            <Link to='/signIn' text='SignIn' component={AppBarTab} />
            <Link to='/signUp' text='SignUp' component={AppBarTab} />
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;