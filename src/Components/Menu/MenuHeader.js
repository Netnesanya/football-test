import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import m from './MenuHeader.module.css'
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
import Navbar from "../Navbar/Navbar";


const MenuHeader = () => {

    return (
        <AppBar>
            <Toolbar>
                <Navbar className={m.nav}/>
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