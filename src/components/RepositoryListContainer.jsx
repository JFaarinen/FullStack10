import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import SearchMenu from './SearchMenu';
import SortMenu from './SortMenu';

const styles = StyleSheet.create({
    separator: {
        height: 10
    }, 
    container: {
      paddingRight: 0,
      flex: 1,
      zIndex: 100
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends React.Component {
    
    listHeader = () => {
        const props = this.props;

        return (
        <View>
          <SearchMenu setSearch={props.setSearch} />   
          <SortMenu setOrder={props.setOrder} />
        </View>
      );
    };
  
    render() {
      const {repositoryNodes, renderRepositoryItem} =  this.props;
      return (
        <View style={styles.container}>
        <FlatList 
            data={repositoryNodes}
            renderItem={renderRepositoryItem}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
            ListHeaderComponent={this.listHeader}
            ListHeaderComponentStyle={{zIndex: 50}}
        />
        </View>
        );
    }
  }

  export default RepositoryListContainer;