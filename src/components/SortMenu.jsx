import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 100
    }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

const SortMenu = ({setOrder}) => {
    const [selectedOrder, setSelectedOrder] = useState("date");
    
    const sortingList = [
        {
            label: 'By Date',
            value: 'date'
        },
        {
            label: 'Highest rated',
            value: 'highest'
        },
        {
            label: 'Lowest rated',
            value: 'lowest'
        }
    ]

    useEffect(() => {
        setOrder(selectedOrder);
    }, [selectedOrder]);

    return(
        <View style={styles.container}>
        <RNPickerSelect
            onValueChange={(value) => setSelectedOrder(value)}
            items={sortingList}
            value={selectedOrder}
            style={pickerSelectStyles}
        />
        </View>
    );
};

export default SortMenu;
