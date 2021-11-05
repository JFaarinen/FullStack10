import React from 'react';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';
import SignUpForm from './SignUpForm';
import styles from '../styles';

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
} 

const validationSchema = yup.object().shape({
    username: yup 
    .string()
    .min(1, 'Username min 1 character')
    .max(30, 'Username max 30 characters')
    .required('Username required'),
    password: yup 
    .string()
    .min(5, 'Password min 5 characters')
    .max(50, 'Password max 50 characters')
    .required('Password required'), 
    passwordConfirmation: yup 
    .string() 
    .oneOf([yup.ref('password'), null], 'Confirm must match with password')
    .required('Password must be confirmed')
});



const SignUp = () => {
    const history = useHistory();
    const [signUp] = useSignUp();
    const [signIn] = useSignIn(); 

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({ username, password});
            await signIn({ username, password});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Formik
        style={styles.form}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;