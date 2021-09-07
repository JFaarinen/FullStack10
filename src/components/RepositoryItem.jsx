import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'white',
        width: 'auto',
        flex: 1
    },
    containerColumn: {
        paddingTop: 0,
        flexDirection: 'column'
    },
    containerRow: {
        flexDirection: 'row',
    },
    containerEven: {
        justifyContent: 'space-evenly'
    },
    containerBasic: {
        justifyContent: 'flex-start'
    },
    avatar: {
        marginRight: 10,
        width: 50,
        height: 50
    }
});

const parseNumericData = (value) => {
    if (Number(value) < 1000) {
        return value;
    } else {
        return (((Number(value)/1000).toFixed(1))+'k');
    }
}

const RepositoryContainer = ({flexDirection, justify, style, ...props}) => {
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

const RepositoryItem = ({item}) => {
    const BasicData = () => (
        <RepositoryContainer flexDirection='row' justify='basic-data'>
            <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}}/>
            <BasicDetails />
        </RepositoryContainer>
    );
    
    const BasicDetails = () => (
        <RepositoryContainer flexDirection='column'>
            <Text fontSize='subheading' fontWeight='bold'> {item.fullName}</Text>
            <Text> {item.description}</Text>
            <Text color='primary'> {item.language}</Text>
        </RepositoryContainer>
    );

    const StatisticList = () => (
        <RepositoryContainer flexDirection='row' justify='even'>
            <StatisticItem title='Stars' stat={parseNumericData(item.stargazersCount)}/>
            <StatisticItem title='Forks' stat={parseNumericData(item.forksCount)}/>
            <StatisticItem title='Reviews' stat={parseNumericData(item.reviewCount)}/>
            <StatisticItem title='Rating' stat={parseNumericData(item.ratingAverage)}/>
        </RepositoryContainer>
    );

    const StatisticItem = ({title, stat}) => (
        <RepositoryContainer flexDirection='column'>
            <Text fontWeight='bold'>{stat}</Text>
            <Text>{title}</Text>
        </RepositoryContainer>
    );

    return(
        <View style={styles.container}>
            <BasicData />
            <StatisticList />
        </View>
    );
}

export default RepositoryItem;