import theme from './theme';
import { StyleSheet } from 'react-native';

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
    },
    button: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary
    }, 

    separator: {
        height: 10
    },

    rating: {
        width: 60,
        height: 60,
        borderColor: theme.colors.primary,
        color: theme.colors.primary,
        borderWidth: 2,
        borderRadius: 30,
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'   
    }
});

export default styles;