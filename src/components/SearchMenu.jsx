import React, { useEffect, useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const SearchMenu = ({setSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    const [value] = useDebounce(searchValue, 500);

    const handleChange = (value) => {
        setSearchValue(value);
    }

    useEffect(() => {
        setSearch(value);
    }, [value]);

    return (
        <Searchbar
        placeholder="Find reporitory..."
        onChangeText={handleChange}
        value={searchValue}
        />
    );
};

export default SearchMenu;