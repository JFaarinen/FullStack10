import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import useSingleRepository from '../hooks/useSingleRepository';
import theme from '../theme';

const styles = StyleSheet.create({
    separator: {
        height: 10
    }, 
    container: {
      paddingRight: 0
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryContainer = ({repository}) => {
    console.log(repository);
    return (
        <View style={styles.container}>
            <RepositoryItem item={repository} singleItem={true} />
        </View>
    );
};

const SingleRepository = () => {
    const id = useParams().id;
    const {repository} = useSingleRepository({id});

    if  (!repository) {
        return <View><Text>Loading...</Text></View>
    }

    return (
        <SingleRepositoryContainer repository={repository} />
    );
};

export default SingleRepository;