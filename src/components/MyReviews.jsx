import React from 'react';
import { FlatList, View } from 'react-native';
import useAuthUser from '../hooks/useAuthUser';
import MyReviewItem from './MyReviewItem';
import styles from '../styles';

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

    const { authorizedUser, fetchMore, refetch } = useAuthUser({includeReviews: true, first: 8});

    if (!authorizedUser) {
        return null;
    }

    const reviews = authorizedUser.reviews 
    ? authorizedUser.reviews.edges.map((r) => r.node) 
    : [];

    console.log(reviews);

    const onEndReached = () => {
        fetchMore();
    };

    return (
        <View>
            <FlatList 
            data={reviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => <MyReviewItem item={item} refetch={refetch} />}
            onEndReach={onEndReached}
            onEndReachedThreshold={0,5}
            />
        </View>
    );
};

export default MyReviews;