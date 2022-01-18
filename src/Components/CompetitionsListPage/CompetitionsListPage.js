import React  from 'react';
import {competitionsAPI} from "../../utilities/http";
import Competition from "./Competition";
import comp from './CompetitionsListPage.module.css'





const CompetitionsListPage = (props) => {


    let competitionElements = props.competitions.map((comp, index) => (
        <Competition id={comp.id} area={comp.area.name} code={comp.code} plan={comp.plan} name={comp.name} key={index} flag={comp.area.ensignUrl}/>
))
    return (
        <div className={comp.wrapper}>
            {competitionElements}
        </div>
    )

}
export default CompetitionsListPage;