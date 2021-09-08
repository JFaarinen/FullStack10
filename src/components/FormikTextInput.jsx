import React from 'react';
import { StyleSheet} from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    errorText: {
        color: theme.colors.error,
        marginTop: 5
    },

    inputField: {
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        marginBottom: 10,
    }
});

const FormikTextInput = ({ name, ...props}) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput 
                style={
                    meta.error
                    ? {...styles.inputField, borderColor: theme.colors.error}
                    : {...styles.inputField, borderColor:theme.colors.primary}
                }
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;