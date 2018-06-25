import * as types from "../constants/actionTypes"
import initialState from "./initialState"

export default function (state = initialState.films, action) {
	switch (action.type) {
        case types.LOAD_FILMS:
			return {
				...state, 
				films: action.films
			}
		default:
			return state
	}
}