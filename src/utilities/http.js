import * as axios from "axios";
import {useState} from "react";

const instance = axios.create({

    baseURL: `https://api.football-data.org/v2/`,
    headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY, "Content-Type": "application/json, text/plain, */*"}
})

export const competitionsAPI = {
    competitionsList() {
        return instance.get(`/competitions/`)
            .then(response => {
                return response.data})
            .catch(err=> console.log(err))
    },
    competitionsSearch(areas, plan) {
        return instance.get(`/competitions?areas=${areas}&plan=${plan}`,
            {
                params: {
                    areas: "AREAS",
                    plan: "PLAN"
                }
            }).then(response => {
            return response.data
        })
    }

}


export const teamsAPI = {
    teamsList(id) {

    }
}


export const matchesAPI = {}

export const areasAPI = {}
export const playersAPI = {}

