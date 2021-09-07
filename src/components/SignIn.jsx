import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik, useField } from 'formik';
import { View, Button, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.bgPrimary,
    },
});

const initialValues = {
    username: '',
    password: ''
}

const SignInForm = ({ onSubmit }) => {
    const [usernameField, usernameMeta, usernameHelpers] = useField('username');
    const [passwordField, passwordMeta, passwordHelpers] = useField('password');

    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='username' />
            <FormikTextInput name='password' placeholder='password' secureTextEntry />
            <Button onPress={onSubmit} title='Log in'/>
        </View>
    );
};

const SignIn = () => {

    const onSubmit = () => {
        console.log('clicked!');
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;