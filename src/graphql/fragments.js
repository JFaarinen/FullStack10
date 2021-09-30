
import { gql } from '@apollo/client';

export const REPOSITORY_DATA = gql`
  fragment RepositoryData on Repository {
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