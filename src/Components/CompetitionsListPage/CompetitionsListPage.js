import React, {useState, useEffect} from 'react';
import {competitionsAPI} from "../../utilities/http";
import Competition from "./Competition";
import * as axios from "axios";
import APIdata from "../../testingjson/download.json";



const CompetitionsListPage = (props) => {
    competitionsAPI.competitionsList()
    let state = {
        data:[]
    }

    state.data = competitionsAPI.competitionsList()
    console.log(state.data)

    let comps = state.data.map(comp => (<Competition key={comp.id} id={comp.id} name={comp.name} areaa={comp.area.name} />))
    return (
        <div>
            {comps}
        </div>
    )

}
export default CompetitionsListPage;