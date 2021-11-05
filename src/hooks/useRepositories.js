import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sort, search) => {
    const [repositories, setRepositories] = useState();
    const [loading, setLoading] = useState(false);
    const variables = {...sort, searchKeyword: search};
    const result = useQuery(GET_REPOSITORIES, {
        variables: variables, 
        fetchPolicy: 'cache-and-network' 
    });

    const fetchRepositories = async () => {
        setLoading(true);
        if (result.data) {
            setRepositories(result.data.repositories);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchRepositories();
    }, [result]);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;