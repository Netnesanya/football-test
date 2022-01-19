import React from 'react';
import s from './Search.module.css'
import {TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
    return (
        <TextField className={s.search_bar}
            value={props.value}
            id="standard-basic" label="Search..." variant="standard"
        > </TextField>
    );
};

export default Search;