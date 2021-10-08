import React from 'react';
import Text from './Text';
import { TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import styles from '../styles'

const initialValues = {
    owner: '',
    name: '',
    rating: 0,
    text: ''
};

const RepositoryReviewForm = ({ onSubmit }) => {
    const [ownerField, ownerMeta, ownerHelpers] = useField('owner');
    const [nameField, nameMeta, nameHelpers] = useField('name');
    const [ratingField, ratingMeta, ratingHelpers] = useField('rating');
    const [textField, textMeta, textHelpers] = useField('text');

    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Repository owner name"
            value={ownerField.value}
            onChangeText={text => ownerHelpers.setValue(text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Repository name"
            value={nameField.value}
            onChangeText={text => nameHelpers.setValue(text)}
            style={styles.input}
            />
            <TextInput 
            placeholder="Rating between 0 and 100"
            value={ratingField.value}
            onChangeText={text => ratingHelpers.setValue(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Review"
            value={textField.value}
            onChangeText={text => textHelpers.setValue(text)}
            style={styles.input}
            />
            <Pressable onPress={onSubmit}>
                <View style={styles.button}>
                    <Text element='button'>Create a review</Text>
                </View>
            </Pressable>
        </View>
    );
};

const  RepositoryReview = () => {
    const onSubmit = values => {
        console.log('values: ', values)
        console.log('submitting form!')
    };

    return (
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        >
            {({ handleSubmit }) => <RepositoryReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default RepositoryReview;

