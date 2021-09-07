import React from 'react';
import Text from './Text';
import { Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    }
});

const AppBarTab = ({text, link}) => {
    console.log(link);
    return(
        <View style={styles.container}>
        <Pressable>
            <Link to={link}>
                <Text 
                color='appBar' 
                fontWeight='bold'
                fontSize='subheading'
                >{text}</Text>
            </Link>       
        </Pressable>
        </View>
    )
}

export default AppBarTab;