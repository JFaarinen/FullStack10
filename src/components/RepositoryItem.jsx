import React from 'react';
import { View, Image, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Text from './Text';
import styles from '../styles';

const handleOpening = (url) => {
    console.log('opening ', url);
    WebBrowser.openBrowserAsync(url);
}

const LinkButton = ({url}) => {
    return(
        <Pressable onPress={() => handleOpening(url)}>
            <View style={styles.button}>
                <Text element='button'>Open in GitHub</Text>
            </View>
        </Pressable>
    );
};

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

const RepositoryItem = ({item, singleItem}) => {
  
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
            {singleItem ? <LinkButton url={item.url} /> : null}
        </View>
    );
}

export default RepositoryItem;