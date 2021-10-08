import theme from './theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: 'white',
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
        backgroundColor: theme.colors.primary,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 3
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
    },

    input: {
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        paddingLeft: 10,
        height: 40,
      },
});

export default styles;