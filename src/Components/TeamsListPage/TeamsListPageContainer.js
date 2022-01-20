import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getTeamsThunkCreator} from "../../Store/teamsReducer";
import TeamsListPage from "./TeamsListPage";

class TeamsListPageContainer extends React.Component {
    componentDidMount() {
        this.props.getTeams()
    }

    render() {
        return (
            <TeamsListPage
            teams={this.props.teams}
            />
        );
    }
}

let mapStatetoProps = (state) => {
    return {
        teams: state.teamsList.teams
    }
}



export default compose(
    connect(mapStatetoProps, {getTeams: getTeamsThunkCreator}) (TeamsListPageContainer)
)