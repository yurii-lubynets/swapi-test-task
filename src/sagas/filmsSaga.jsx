import { put, call } from "redux-saga/effects"

import { swapiRequest } from "../API/api"
import * as types from "../constants/actionTypes"

export function* searchFilmsSaga({hero}) {
	try {
		const response = yield hero.films.map(filmApiEndPoint => call(swapiRequest, filmApiEndPoint))
		
		const films = response.map(item => item.title); 
		yield [
			put({ type: types.LOAD_FILMS, films }),
		]
	} catch (error) {
		yield put({ type: 'ERROR', error })
	}
}