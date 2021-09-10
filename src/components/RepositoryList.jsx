import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet  } from 'react-native';
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

  const repositoryNodes = repositories 
  ? repositories.edges.map(edge => edge.node)
  : [];

  const renderRepositoryItem =({item}) => {
    return ( <RepositoryItem item={item} />);
  };
  
  return (
    <View style={styles.container}>
      <FlatList style={styles.container} 
      data={repositoryNodes}
      renderItem={renderRepositoryItem}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item.id}
      />
    </View>
    );
};

export default RepositoryList;