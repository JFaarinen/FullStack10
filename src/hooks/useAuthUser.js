import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const useAuthUser = (variables) => {
    const {data, fetchMore, loading, ...result} = useQuery(GET_USER, {
        fetchPolicy: 'cache-and-network',
        variables
    });

    const handleFetchMore = () => {
        const pagesToFetch = 
        !loading
        && data 
        && data.authorizedUser.reviews.pageInfo.hasNextPage;

        if (!pagesToFetch) {
            return;
        }

        fetchMore({
            query: GET_USER,
            variables: {
                after: data.authorizedUser.reviews.endCursor,
                ...variables
            },
            updateQuery: (prevResult, { fetchResult }) => {
                const nextResult ={
                    authorizedUser: {
                        ...fetchMoreResult.authorizedUser,
                        edges: [
                            ...prevResult.authorizedUser.reviews.edges, 
                            ...fetchResult.authorizedUser.reviews.edges
                        ],
                    }
                };
                return nextResult;
            }
        });
    };

    return {
        authorizedUser: data ? data.authorizedUser : undefined,
        fetchMore: handleFetchMore,
        loading,
        ...result
    };
};

export default useAuthUser;