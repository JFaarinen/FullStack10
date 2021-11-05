import React from 'react';
import { FlatList, View } from 'react-native';
import { useParams } from 'react-router';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import useSingleRepository from '../hooks/useSingleRepository';
import format from 'date-fns/format';
import styles from '../styles';

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryContainer = ({repository}) => {
    //console.log(repository);
    return (
        <View>
            <View style={styles.container}>
                <RepositoryItem item={repository} singleItem={true} />
            </View>
            <ItemSeparator />
        </View>
    );
};

const ReviewContainer = ({flexDirection, justify, style, ...props}) => {
    const containerStyle = [
        styles.container, 
        flexDirection === 'row' && styles.containerRow,
        flexDirection === 'column' && styles.containerColumn,
        justify === 'even' && styles.containerEven,
        justify === 'basic-data' && styles.containerBasic,
        style
    ];
    return <View style={containerStyle} {...props} />
};

const ReviewItem = ({review}) => {
    console.log('SingleRepository.jsx review ', review);
    return(
            <ReviewContainer flexDirection='row' justify='basic-data'>
                <View style={styles.rating}>
                    <Text color='review' fontSize='subheading' fontWeight='bold'>{review.rating}</Text>
                </View>
                <ReviewContainer flexDirection='column' justify='even'>
                    <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
                    <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
                    <Text>{review.text}</Text>
                </ReviewContainer>
            </ReviewContainer>
    );
};

const SingleRepository = () => {
    const id = useParams().id;
    const {repository} = useSingleRepository({id});
    console.log('SingleRepository.jsx repository ', repository);
    const reviews = repository 
        ? repository.reviews.edges.map((e) => e.node) 
        : [];
    
    if  (!repository) {
        return <View><Text>Loading...</Text></View>
    }

    return (
        <FlatList 
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <SingleRepositoryContainer repository={repository} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        />
    );
};

export default SingleRepository;