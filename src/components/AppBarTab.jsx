import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
    <Text fontWeight='bold' fontSize='subheading' color='appBar' style={{padding: 10}}>{text}</Text>
    </Pressable>
  )
};

export default AppBarTab;