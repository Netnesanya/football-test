import {
    EVENTS_PAGE_ROUTE,
    MAIN_PAGE_ROUTE,
    SOME_ROUTE,
    TEAMS_LIST_PAGE_ROUTE,
    COMPETITIONS_LIST_PAGE_ROUTE
} from "../utilities/consts";
import MainPage from "./MainPage/MainPage";
import MatchesListPage from "./MatchesListPage/MatchesListPage";
import CompetitionsListPage from "./CompetitionsListPage/CompetitionsListPage";
import TeamsListPage from "./TeamsListPage/TeamsListPage";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    // {
    //     path: TEAM_MATCHES_LIST_PAGE,
    //     Component: MatchesListPage
    // },
    {
        path: COMPETITIONS_LIST_PAGE_ROUTE,
        Component: CompetitionsListPage
    },
    {
        path: TEAMS_LIST_PAGE_ROUTE,
        Component: TeamsListPage
    },
    {

    }
]
