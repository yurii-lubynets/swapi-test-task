import { takeEvery, all } from 'redux-saga/effects';

import { searchPeopleSaga } from "./peopleSaga"
import { searchFilmsSaga } from "./filmsSaga"
import { changePaginationSaga } from "./paginationSaga"
import * as types from "../constants/actionTypes"

export default function* watchAll() {
	yield all([
		takeEvery(types.SEARCH_PEOPLE, searchPeopleSaga),
		takeEvery(types.SELECT_HERO, searchFilmsSaga),
		takeEvery(types.CHANGE_PAGINATION, changePaginationSaga)
	])
}