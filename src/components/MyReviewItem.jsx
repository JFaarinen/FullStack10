import format from 'date-fns/format';
import React from 'react';
import { View, Pressable, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import Text from './Text';
import useDeleteReview from '../hooks/useDeleteReview';
import styles from '../styles';

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

const MyReviewItem = ({ item, refetch }) => {
    const history = useHistory();
    const [deleteReview] = useDeleteReview();

    if (!item) {
        return null;
    }

    console.log(item);

    const handleToRepository = () => {
        console.log(`moving to ${item.repository.id}`);
        history.push(`/repository/${item.repository.id}`);
    };

    const handleDelete = () => {
        const {id} = item;
        console.log(`removing ${id}`);
        Alert.alert(
            "Delete review",
            "Are you sure you want to remove this review?",
            [
                {
                    text: "No",
                    onPress: () => console.log('canceled')
                },
                {
                    text: "Yes",
                    onPress: async () => {
                        await deleteReview({id});
                        refetch();
                    }
                }
            ]
        );
        return true;
    }

    const reviewed = format(new Date(item.createdAt), 'dd.MM.yyyy');

    return(
        <View style={styles.container}>
            <ReviewContainer flexDirection='row' justify='basic-data'>
                <View style={styles.rating}>
                    <Text color='review' fontSize='subheading' fontWeight='bold'>{item.rating}</Text>
                </View>
                <ReviewContainer flexDirection='column' justify='even'>
                    <Text fontSize='subheading' fontWeight='bold'>{item.repository.fullName}</Text>
                    <Text>{reviewed}</Text>
                    <Text>{item.text}</Text>
                </ReviewContainer>

            </ReviewContainer>
            <View style={styles.container}>
                <Pressable onPress={handleToRepository}>
                    <View style={styles.button}>
                        <Text element='button'>To Repository</Text>
                    </View>
                </Pressable>
                <Pressable onPress={handleDelete}>
                    <View style={styles.button}>
                        <Text element='button'>Delete</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default MyReviewItem;