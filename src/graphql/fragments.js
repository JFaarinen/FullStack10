
import { gql } from '@apollo/client';

export const REPOSITORY_DATA = gql`
  fragment repositoryData on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
  }
`;

export const REVIEW_DATA = gql`
fragment reviewData on Review {
  id
  text 
  rating 
  createdAt 
  user {
    id 
    username 
  }
}
`;