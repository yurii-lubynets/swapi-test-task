import { put, call } from "redux-saga/effects"

import { swapiPeople } from "../API/api"
import * as types from "../constants/actionTypes"

export function* searchPeopleSaga({params}) {
	try {
		const response = yield call(swapiPeople, params)

		const people = response.results
		const {previous, next} = response
	
		yield [
			put({ type: types.PEOPLE_SUCCESS, people }),
			put({type: types.PAGINATION, previous, next})
		]
	} catch (error) {
		yield put({ type: 'ERROR', error })
	}
}