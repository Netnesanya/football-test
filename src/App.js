import './App.css';
import AppRouter from "./Components/AppRouter";
import {BrowserRouter} from "react-router-dom";
// import {competitionsAPI} from "./utilities/http";
import APIdata from './testingjson/download.json'
import MainPage from "./Components/MainPage/MainPage";
import CompetitionsListPage from "./Components/CompetitionsListPage/CompetitionsListPage";
import Competition from "./Components/CompetitionsListPage/Competition";







function App() {


  return (
    <BrowserRouter>
    <div>

      {/*{comps}*/}
      {/*<MainPage />*/}
      <CompetitionsListPage/>
    </div>
      {/*<AppRouter />*/}
    </BrowserRouter>
  );
}

export default App;
