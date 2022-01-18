import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Menu,
    Container,
    Button,
    Tooltip,
    MenuItem,
    InputBase,
    Typography
} from "@mui/material";
import Search from "../Search/Search";


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const MenuHeader = () => {

    return (
        <AppBar>
            <Toolbar>
                <Typography variant={"h3"}  sx={{flexGrow : 1}}>
                    <Search />
                </Typography>
                <IconButton color={"inherit"}>
                <SportsSoccerIcon fontSize={"large"}/>
                </IconButton>

            </Toolbar>
        </AppBar>
    );
};

export default MenuHeader;