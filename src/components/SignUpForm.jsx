import React from 'react';
import { Pressable, View } from 'react-native';
import styles from '../styles';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const SignUpForm = ({onSubmit}) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='username'/>
            <FormikTextInput name='password' placeholder='password' />
            <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation'/>
            <Pressable onPress={onSubmit} style={styles.button} >
                <Text element='button' fontWeight='bold' align='center' fontSize='subheading'>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default SignUpForm;