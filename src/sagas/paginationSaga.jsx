import { put, call } from "redux-saga/effects"

import { swapiRequest } from "../API/api"
import * as types from "../constants/actionTypes"

export function* changePaginationSaga({pagination}) {
	try {
		const response = yield call(swapiRequest, pagination)

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