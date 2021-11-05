import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import { Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [order, setOrder] = useState('date');
  const [search, setSearch] = useState('');
  
  if (order === 'date') {
    setOrder({
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC',
    })
  } else if (order === 'highest') {
    setOrder({
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'DESC',
    })
  } else if (order === 'lowest') {
    setOrder({
      orderBy: 'RATING_AVERAGE',
      orderDirection: 'ASC',
    })
  }

  const { repositories } = useRepositories(order, search);

  const PressItem = (item) => {
    console.log(`${item.id} pressed`);
    history.push(`/repository/${item.id}`);
  }

  const history = useHistory();
  const repositoryNodes = repositories 
  ? repositories.edges.map((edge) => edge.node)
  : [];

  const renderRepositoryItem =({item}) => {
    return ( 
    <Pressable onPress={() => PressItem(item)}>
      <RepositoryItem item={item}/>
    </Pressable>);
  };

  return (
    <RepositoryListContainer 
    repositories={repositories} 
    repositoryNodes={repositoryNodes}
    renderRepositoryItem={renderRepositoryItem}
    setOrder={setOrder}
    setSearch={setSearch}
    />
    );
};

export default RepositoryList;