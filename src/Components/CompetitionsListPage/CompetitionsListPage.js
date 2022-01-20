import React, {useEffect, useState} from 'react';
import Competition from "./Competition";
import comp from './CompetitionsListPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCompetitions, getCompetitionsListThunkCreator} from "../../Store/competitionsReducer";
import {competitionsAPI} from "../../utilities/http";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";


const CompetitionsListPage = (props) => {
    let [state, setState] = useState(0)
    let competitions = useSelector(getCompetitions)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCompetitionsListThunkCreator())
    }, []) ;


   const updatePageContent = () => {
       dispatch(getCompetitionsListThunkCreator())
       setState(state + 1)
   }


    let competitionElements = competitions.map((comp, index) => {
        let currentSeason = comp.currentSeason !== null ? comp.currentSeason : {
            startDate: "TBD",
            endDate: "TBD",
            winner: "TBD"
        }
        let winner = currentSeason.winner !== null ? currentSeason.winner : "TBD"
        return (<Competition
            id={comp.id} area={comp.area.name} code={comp.code} lastUpdated={comp.lastUpdated}
                             plan={comp.plan} name={comp.name} key={index} flag={comp.area.ensignUrl}
                             startDate={currentSeason.startDate !== null ? currentSeason.startDate : "TBD"}
                             endDate={currentSeason.endDate !== null ? currentSeason.endDate : "TBD"}
            winner={winner}
       />)
            // had some problems with null values in nested objects from JSON, wasn't sure how to solve it
    {/*// <NavLink to={`/competitions/${comp.id}`}> </NavLink>*/}
    })
    return (
        <div className={comp.wrapper}>
    <button onClick={updatePageContent}>update</button>
            {competitionElements}

        </div>
    )

}
export default CompetitionsListPage;