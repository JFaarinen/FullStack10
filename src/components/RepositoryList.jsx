import React, { useEffect } from 'react';
import { useHistory } from 'react-router-native';
import { FlatList, View, StyleSheet, Pressable  } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10
    }, 
    container: {
      paddingRight: 0
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <RepositoryListContainer repositories={repositories} />
    );
};

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();
  const repositoryNodes = repositories 
  ? repositories.edges.map((edge) => edge.node)
  : [];

  const PressItem = (item) => {
    console.log(`${item.id} pressed`);
    history.push(`/repository/${item.id}`);
  }

  const renderRepositoryItem =({item}) => {
    return ( 
    <Pressable onPress={() => PressItem(item)}>
      <RepositoryItem item={item}/>
    </Pressable>);
  };

  return (
  <FlatList 
  style={styles.container} 
  data={repositoryNodes}
  renderItem={renderRepositoryItem}
  ItemSeparatorComponent={ItemSeparator}
  keyExtractor={item => item.id}
  />
  );
}

export default RepositoryList;