import * as types from "../constants/actionTypes"
import initialState from "./initialState"

export default function (state = initialState.pagination, action) {
	switch (action.type) {
		case types.PAGINATION:
			return {
				...state, 
				previous: action.previous,
				next: action.next
			}
		case types.CHANGE_PAGINATION:
			return [
				...state, 
				...action
			]
		default:
			return state
	}
}