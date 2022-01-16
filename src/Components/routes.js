import {
    EVENTS_PAGE_ROUTE,
    MAIN_PAGE_ROUTE,
    SOME_ROUTE,
    TEAMS_LIST_PAGE_ROUTE,
    TOURNAMENTS_PAGE_ROUTE
} from "../utilities/consts";
import MainPage from "./MainPage/MainPage";
import TournamentsPage from "./TournamentsPage/TournamentsPage";
import EventsPage from "./EventsPage/EventsPage";
import TeamsListPage from "./TeamsListPage/TeamsListPage";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: TOURNAMENTS_PAGE_ROUTE,
        Component: TournamentsPage
    },
    {
        path: EVENTS_PAGE_ROUTE,
        Component: EventsPage
    },
    {
        path: TEAMS_LIST_PAGE_ROUTE,
        Component: TeamsListPage
    },
    {

    }
]
