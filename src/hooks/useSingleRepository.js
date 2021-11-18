import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (variables) => {
    console.log('fetching single repository: ', variables);
    const {data, fetchMore, loading, ...result } = useQuery(GET_REPOSITORY, { 
        variables, 
        fetchPolicy: 'cache-and-network' 
    });

    const handleFetchMore = () => {
        const pagesToFetch = 
        !loading
        && data 
        && data.repository.reviews.pageInfo.hasNextPage;

        if (!pagesToFetch) {
            return;
        }

        fetchMore({
            query: GET_USER,
            variables: {
                after: data.repository.reviews.endCursor,
                ...variables
            },
            updateQuery: (prevResult, { fetchResult }) => {
                const nextResult ={
                    repository: {
                        ...fetchMoreResult.repository,
                        edges: [
                            ...prevResult.repository.reviews.edges, 
                            ...fetchResult.repository.reviews.edges
                        ],
                    }
                };
                return nextResult;
            }
        });
    };


    return { 
        repository: data ? data.repository : undefined, 
        fetchMore: handleFetchMore,
        loading, 
        ...result
    };
};

export default useSingleRepository;