import React from 'react';
import {Routes, Redirect, Route} from 'react-router-dom'
import MainPage from "./MainPage/MainPage";
import Menu from "./Menu/Menu";
import {publicRoutes} from "./routes";
import CompetitionsListPage from "./CompetitionsListPage/CompetitionsListPage";

const AppRouter = () => {
    return (
        <Routes>
          {/*<Route path='/competitions' render={()=><CompetitionsListPage/>}/>*/}
          {/*<Route path='/' render={() => <MainPage />}/>*/}
        </Routes>
    );
};

export default AppRouter;