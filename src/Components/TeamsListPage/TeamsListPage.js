import React, {useEffect} from 'react';
import {teamsAPI} from "../../utilities/http";
import {getTeams, getTeamsThunkCreator} from "../../Store/teamsReducer";
import {useDispatch, useSelector} from "react-redux";
import {getCompetitionsListThunkCreator} from "../../Store/competitionsReducer";

const TeamsListPage = (props) => {
    let dispatch = useDispatch()
    useSelector(getTeams)
    useEffect(() => {
        dispatch(getTeamsThunkCreator())
    }, []) ;
    return (
        <div>
            
        </div>
    );
};

export default TeamsListPage;