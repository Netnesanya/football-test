import React, {useEffect, useState} from 'react';
import comp from './CompetitionsListPage.module.css'
import {Stack} from "@mui/material";
import Winner from "./Winner";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";
import {competitionsAPI} from "../../utilities/http";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCompetition, getCurrentCompetitionThunkCreator} from "../../Store/competitionsReducer";


const Competition = (props) => {
    let [state, setState] = useState(0)
    let currentCompetition = useSelector(getCurrentCompetition)
    let {compId} = useParams()
    const dispatch = useDispatch()
    const paramNavigation = (event) => {

         dispatch(getCurrentCompetitionThunkCreator(props.id))

        setState(state + 1)
        console.log(compId)
    }


    return (
        <Stack className={comp.single_card}
               direction="column"
               justifyContent="space-between"
               alignItems="center"
               spacing={1}>
            <NavLink onClick={paramNavigation} to={`/competitions/${props.id}`}>
                {props.name}
                {props.area}
                {props.plan}
                {props.startDate}
                {props.endDate}
                <Winner winner={props.winner}/>
                {props.lastUpdated}
            </NavLink>


            {<img
                src={props.flag !== null ? props.flag : 'http://www.onestopplumbersshop.co.za/images/categories/400/bar-img-unavailable.png'}
                width={30}/>}
            {props.id}

        </Stack>
    );
};

export default Competition;