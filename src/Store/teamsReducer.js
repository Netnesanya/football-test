import {teamsAPI} from "../utilities/http";

const GET_TEAMS = "GET_TEAMS"

const initialState= {
    teams: {}
}


export const teamsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;

        case GET_TEAMS:
            return {
                ...state, teams: action.teams
            }
    }
}

export const setTeams = (teams) => ({type: GET_TEAMS, teams})

export const getTeamsThunkCreator = () => {
    return(dispatch) => {
        teamsAPI.teamsList(dispatch)
            .then(response => {
                dispatch(setTeams(response.teams))
            })
    }
}

