import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import styles from '../styles';

const ReviewForm = ({ onSubmit }) => {
  
    return (
      <View style={styles.container}>
        <FormikTextInput name='ownerName' placeholder='Repository owner' />
        <FormikTextInput name='repositoryName' placeholder='Repository name'/>
        <FormikTextInput name='rating' placeholder='Rating (0-100)'/>
        <FormikTextInput name='text' placeholder='Review' multiline/>
        <Pressable onPress={onSubmit} style={styles.button} >
          <Text element='button' fontWeight='bold' align='center' fontSize='subheading'>Create Review</Text>
        </Pressable>
      </View>
    );
  };

export default ReviewForm;