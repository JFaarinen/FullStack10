import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {

    const [mutate, result] = useMutation(CREATE_USER, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });
    console.log('called useSignUp');

    const signUp = async ({username, password}) => { 
        console.log('called sign up');
        await mutate({variables: {username, password}});
    }

    return [signUp, result]
}

export default useSignUp;