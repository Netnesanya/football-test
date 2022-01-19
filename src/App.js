import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import {Routes, Route, Link} from "react-router-dom";
import CompetitionsListPageContainer from "./Components/CompetitionsListPage/CompetitionsListPageContainer";
import MatchesListPage from "./Components/MatchesListPage/MatchesListPage";
import TeamsListPage from "./Components/TeamsListPage/TeamsListPage";
import Navbar from "./Components/Navbar/Navbar";
import NotFound404 from "./Components/NotFound404";
import MenuHeader from "./Components/Menu/MenuHeader";
import {Container} from "@mui/material";


function App() {

  return (
<div>
    <header> <MenuHeader/></header>
    <Container sx={{mt: 9}}>
    {/*<header> <Navbar/></header>*/}
        <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/competitions" element={<CompetitionsListPageContainer/>}/>
        <Route path="/matches" element={<MatchesListPage/>}/>
        <Route path="/teams" element={<TeamsListPage/>}/>
        <Route path="/*" element={<NotFound404/>}/>
        </Routes>
    </Container>
</div>
  );
}

export default App;
