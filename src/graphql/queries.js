import { gql } from '@apollo/client';
import { REPOSITORY_DATA, REVIEW_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
    query repositories (
        $orderBy: AllRepositoriesOrderBy, 
        $orderDirection: OrderDirection, 
        $searchKeyword: String, 
        $first: Int, 
        $after: String
        ){
            repositories(
                orderBy: $orderBy
                orderDirection: $orderDirection,
                searchKeyword: $searchKeyword,
                first: $first,
                after: $after
            ) {
                edges {
                    node {
                        ...repositoryData
                    }
                    cursor 
                }
                pageInfo {
                    endCursor, 
                    startCursor,
                    hasNextPage
                }
            }
        }
    ${REPOSITORY_DATA}
`

export const GET_REPOSITORY = gql`
    query ($id: ID!, $first: Int!, $after: String) {
        repository( id: $id) {
            url,    
            ...repositoryData,
            reviews (first: $first, after: $after) {
                edges {
                    node { 
                        ...reviewData
                    }
                    cursor
                }
                pageInfo {
                    endCursor 
                    startCursor 
                    hasNextPage
                }
            }       
        }
    }
    ${REPOSITORY_DATA}
    ${REVIEW_DATA}
`

export const GET_USER = gql`
query getUser(
    $includeReviews: Boolean = false, 
    $first: Int, 
    $after: String
    ) {
    authorizedUser {
        id 
        username
        reviews (first: $first, after: $after) {
            edges @include(if: $includeReviews) {
                node {
                    repository {
                        fullName 
                        id 
                    }
                    ...reviewData
                }
                cursor
            }
            pageInfo {
                endCursor 
                startCursor 
                hasNextPage
            }
        }
    }   
}
${REVIEW_DATA}
`