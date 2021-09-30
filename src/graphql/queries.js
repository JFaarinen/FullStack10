import { gql } from '@apollo/client';
import { REPOSITORY_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
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
            ...RepositoryData       
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