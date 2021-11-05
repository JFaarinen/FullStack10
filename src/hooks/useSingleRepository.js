import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (variables) => {
    console.log('fetching single repository: ', variables);
    const {data, loading, error } = useQuery(GET_REPOSITORY, { 
        variables, 
        fetchPolicy: 'cache-and-network' 
    });

    return { 
        repository: data ? data.repository : undefined, 
        loading, 
        error 
    };
};

export default useSingleRepository;