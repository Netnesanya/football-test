import React from 'react';
import comp from './CompetitionsListPage.module.css'
import {Container, Divider, Stack} from "@mui/material";
import Winner from "./Winner";


const Competition = (props) => {


    return (
<Stack className={comp.single_card}
       direction="column"
       justifyContent="space-between"
       alignItems="center"
       spacing={1} >

            {props.name}
            {props.area}
            {props.plan}
            {props.startDate}
            {props.endDate}
            <Winner key={props.key} winner={props.winner}/>
            {props.lastUpdated}

            {<img
                src={props.flag !== null ? props.flag : 'http://www.onestopplumbersshop.co.za/images/categories/400/bar-img-unavailable.png'}
                width={30}/>}
            {props.id}


</Stack>
    );
};

export default Competition;