import React, {useState} from 'react';
import {competitionsAPI} from "../../utilities/http";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {getCompetitionsListThunkCreator} from "../../Store/competitionsReducer";
import {compose} from "redux";
import CompetitionsListPage from "./CompetitionsListPage";


class CompetitionsListPageContainer extends React.Component {
    componentDidMount() {
        this.props.getCompetitions()
    }

    render() {

        return (
            <div>
                <CompetitionsListPage
                    competitions={this.props.competitions}
                    pageSize={this.props.pageSize}
                    count={this.props.count}
                    getCompetitions={this.props.getCompetitions}
                />
            </div>
        );
    }
}


let mapStateToProps = (state) => {

    return {
        competitions: state.competitionsList.competitions,
        pageSize: state.competitionsList.pageSize,
        count: state.competitionsList.count
    }
}
// let mapDispatchToProps = () => {
//     return {
//         getCompetitions: getCompetitionsListThunkCreator()
//     }
// }


export default compose(
    connect(
        mapStateToProps, {getCompetitions: getCompetitionsListThunkCreator}))(CompetitionsListPageContainer)

