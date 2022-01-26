import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import MatchesListPage from "./Components/MatchesListPage/MatchesListPage";
import Navbar from "./Components/Navbar/Navbar";
import NotFound404 from "./Components/NotFound404";
import MenuHeader from "./Components/Menu/MenuHeader";
import {Container} from "@mui/material";
import TeamsListPage from "./Components/TeamsListPage/TeamsListPage";
import CompetitionInfo from "./Components/CompetitionsListPage/CompetitionInfo";
import CompetitionsListPage from "./Components/CompetitionsListPage/CompetitionsListPage";
import SingleCompetition from "./Components/CompetitionsListPage/SingleCompetition";


function App() {

  return (
<div>
    <header> <MenuHeader/></header>
    <Container sx={{mt: 9}}>
    {/*<header> <Navbar/></header>*/}
        <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/competitions/" element={<CompetitionsListPage/>}/>
        <Route path="/competitions/:compId" element={<SingleCompetition/>}/>
        <Route path="/matches" element={<MatchesListPage/>}/>
        <Route path="/teams" element={<TeamsListPage/>}/>
        <Route path="/*" element={<NotFound404/>}/>
        </Routes>
    </Container>
</div>
  );
}

export default App;
