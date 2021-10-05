import React from 'react';
import { Text as NativeText, StyleSheet} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main, 
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.colorTextSecondary
    },
    colorPrimary: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        padding: 5,
        width: 100
    },
    colorReview: {
        color: theme.colors.primary
    },

    colorAppbar:  {
        color: theme.colors.white
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold
    }
});

const Text = ({color, fontSize, fontWeight, style, ...props}) => {
    const textStyle = [
        styles.text, 
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'review' && styles.colorReview,
        color === 'appBar' && styles.colorAppbar,
        fontSize === 'subheading' && styles.fontSizeSubHeading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style
    ];
    return <NativeText style={textStyle} {...props} testID={'textComponent'} />;
}

export default Text;