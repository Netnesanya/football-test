import React from 'react';
import {useSelector} from "react-redux";
import {getCurrentCompetition, getCurrentCompetitionThunkCreator} from "../../Store/competitionsReducer";

const SingleCompetition = ({name, area, plan, startDate, endDate, lastUpdated}) => {
    let currentCompetition = useSelector(getCurrentCompetition)
    getCurrentCompetitionThunkCreator(currentCompetition)
    return (
        <div>
            {currentCompetition}
            {name}
            {area}
            {plan}
            {startDate}
            {endDate}
            {lastUpdated}
        </div>
    );
};

export default SingleCompetition;