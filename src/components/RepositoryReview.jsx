import React from 'react';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm'
import useCreateReview from '../hooks/useCreateReview';
import styles from '../styles';

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };
  
  const validationSchema = yup.object().shape({ 
     ownerName: yup    
     .string()    
     .required('Repository owner name is required.'),  
     repositoryName: yup    
     .string()    
     .required('Repository name is required.'),
     rating: yup
     .number()
     .min(0)
     .max(100)
     .required('Rating is required.')
  });
  
const ReviewContainer = ({ onSubmit }) => {
    return (
        <Formik
            style={styles.form}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
}

const RepositoryReview = () => {
  const history = useHistory();
  const [review] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data  = await review({ ownerName, repositoryName, rating, text });
      history.push(`/repository/${data.createReview.repositoryId}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReviewContainer onSubmit={onSubmit} />
  )
};

export default RepositoryReview;