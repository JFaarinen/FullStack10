import { gql } from '@apollo/client';
import { REPOSITORY_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
    query repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
        repositories(
            orderBy: $orderBy
            orderDirection: $orderDirection,
            searchKeyword: $searchKeyword
        ) {
            edges {
                node {
                    ...RepositoryData 
                } 
            }
        }
    }
    ${REPOSITORY_DATA}
`

export const GET_REPOSITORY = gql`
    query ($id: ID!) {
        repository( id: $id) {
            url,    
            ...RepositoryData,
            reviews {
                edges {
                    node { 
                        id 
                        text 
                        rating 
                        createdAt 
                        user {
                            id 
                            username
                        }
                    }
                }
            }       
        }
    }
    ${REPOSITORY_DATA}
`

export const GET_USER = gql`
query {
    authorizedUser {
        id 
        username
    }
}
`