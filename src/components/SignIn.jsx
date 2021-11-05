import React from 'react';
import { useHistory } from 'react-router-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Button } from 'react-native';
import * as yup from 'yup';
import styles from '../styles';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
    username: yup
    .string()
    .required('username is required!'),
    password: yup 
    .string()
    .required('password is required!')
});

const initialValues = {
    username: '',
    password: ''
}

const SignInForm = ({ onSubmit }) => {

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
    const history = useHistory();

    const onSubmit = async (values) => {
        console.log('login submit called...');
        const {username, password} = values;
        try {
            const data = await signIn({username, password});
            if (data) {
                history.push('/');            
            } else {
                console.log('väärä tunnus!');
            }
            
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <Formik 
            style={styles.form} 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
                {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;