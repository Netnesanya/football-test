import React, {useEffect, useState} from 'react';
import comp from './CompetitionsListPage.module.css'
import {Stack} from "@mui/material";
import Winner from "./Winner";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";
import {competitionsAPI} from "../../utilities/http";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCompetition, getCurrentCompetitionThunkCreator} from "../../Store/competitionsReducer";
import SingleCompetition from "./SingleCompetition";





const CompetitionInfo = (props) => {
    let [state, setState] = useState(0)

    let {compId} = useParams()
    const dispatch = useDispatch()
    const paramNavigation = () => {
         dispatch(getCurrentCompetitionThunkCreator(props.id))
        setState(state + 1)

    }

    return (
        <Stack className={comp.single_card}
               direction="column"
               justifyContent="space-between"
               alignItems="center"
               spacing={1}>
            <NavLink onClick={paramNavigation} to={`/competitions/${props.id}`}>
                <SingleCompetition
              name={props.name}
                area={props.area}
                plan={props.plan}
                startDate={props.startDate}
                endDate={props.endDate}
                lastUpdated={props.lastUpdated} />
                {props.name}
                {props.area}
                {props.plan}
                {props.startDate}
                {props.endDate}
                {props.lastUpdated}
            </NavLink>
            {/*<Winner winner={props.winner}/>*/}

            {<img
                src={props.flag !== null ? props.flag : 'http://www.onestopplumbersshop.co.za/images/categories/400/bar-img-unavailable.png'}
                width={30}/>}
            {props.id}

        </Stack>
    );
};

export default CompetitionInfo;