import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    id,
                    url,
                    fullName, 
                    description,
                    language, 
                    stargazersCount, 
                    forksCount, 
                    reviewCount, 
                    ratingAverage,
                    ownerAvatarUrl  
                } 
            }
        }
    }
`

export const LOGIN = gql`
mutation authorize($username: String!, $password: String!) {
    authorize(credentials: {username: $username, password: $password }) {
        accessToken   
  }
}
`