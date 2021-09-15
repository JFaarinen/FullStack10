import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/queries';

const useSignIn = () => {
    const [mutate, result] = useMutation(LOGIN, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });

    const signIn = async ({username, password}) => { 
        console.log('called sign in');
        const data = await mutate({variables: {username, password}});
        console.log('returning: ', data);
        return data; 
    }

    return [signIn, result]
}

export default useSignIn;
