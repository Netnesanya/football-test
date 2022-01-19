import React  from 'react';
import Competition from "./Competition";
import comp from './CompetitionsListPage.module.css'






const CompetitionsListPage = (props) => {


    let competitionElements = props.competitions.map((comp, index) => {
            let currentSeason = comp.currentSeason !== null ? comp.currentSeason : {startDate: "TBD", endDate: "TBD", winner: "TBD"}
            let winner = currentSeason.winner !== null ? currentSeason.winner : "TBD"
       return ( <Competition id={comp.id} area={comp.area.name} code={comp.code} lastUpdated={comp.lastUpdated}
                     plan={comp.plan} name={comp.name} key={index} flag={comp.area.ensignUrl} startDate={currentSeason.startDate !== null ? currentSeason.startDate :"TBD" }
                     endDate={currentSeason.endDate !== null ? currentSeason.endDate : "TBD"} winner={winner}
        />
           // had some problems with null values in nested objects, wasn't sure how to solve it by destructuring
)})
    return (
        <div className={comp.wrapper}>

            {competitionElements}

        </div>
    )

}
export default CompetitionsListPage;