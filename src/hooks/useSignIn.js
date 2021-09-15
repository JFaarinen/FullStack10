import { useMutation, useApolloClient, ApolloClient } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const client = useApolloClient();
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(LOGIN, {
        onError: (error) => {
            console.log(error.graphQLErrors[0].message);
        }
    });

    const signIn = async ({username, password}) => { 
        //console.log('called sign in');
        const {data} = await mutate({variables: {username, password}});
        //console.log('returning: ', data.authorize.accessToken);
        if (data) {
            await authStorage.setAccessToken(data.authorize.accessToken);
            client.resetStore();
        }
        return data; 
    }

    return [signIn, result]
}

export default useSignIn;
