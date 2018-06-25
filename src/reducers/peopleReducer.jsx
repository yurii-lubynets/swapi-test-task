import * as types from "../constants/actionTypes"
import initialState from "./initialState"

export default function (state = initialState.people, action) {
	switch (action.type) {
		case types.PEOPLE_SUCCESS:
			return {
				...state, 
				people: action.people,
				params: action.params,
			}
		case types.SELECT_HERO:
			return { 
				...state, 
				selectedHero: action.hero 
			}
		default:
			return state
	}
}