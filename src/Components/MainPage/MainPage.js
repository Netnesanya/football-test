import React from 'react';
import Navbar from "../Navbar/Navbar";
import CompetitionsListPageContainer from "../CompetitionsListPage/CompetitionsListPageContainer";
import {Routes, Redirect, Route} from "react-router-dom";


const MainPage = () => {
    return (

        <div>
            <header>
                Football data provided by the Football-Data.org API
            </header>

            {/*<Route path="/competitions" render={() => <CompetitionsListPageContainer/>}/>*/}

        </div>

    );
};

export default MainPage;