import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik, useField } from 'formik';
import { View, Button, StyleSheet } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
    username: yup
    .string()
    .required('username is required!'),
    password: yup 
    .string()
    .required('password is required!')
});

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.bgPrimary,
        padding: 10
    },
    form: {
        backgroundColor: theme.colors.white
    }
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
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const {username, password} = values;
        try {
            const {data} = await signIn({username, password});
            console.log('auth.data: ', data.authorize);
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <Formik 
        style={styles.form} 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;