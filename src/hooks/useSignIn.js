import {useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/queries';

const useSignIn = () => {
    const [mutate, result] = useMutation(LOGIN);

    const signIn = async ({username, password}) => {
        console.log('logging in ', username, password);
        await mutate({variables: {username, password}});
    }
    console.log('data ', result.data);

    return [signIn, result]
}

export default useSignIn;
