import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
    console.log('called useCreateReview...');

    const createReview = async ({
        repositoryName, ownerName, rating, text
    }) => {
        
        mutate({
            variables: {
                repositoryName, ownerName, rating: parseInt(rating), text
            }
        });
    };

    return [createReview, result];
}

export default useCreateReview;