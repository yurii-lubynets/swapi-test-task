import * as types from "../constants/actionTypes"

export const selectHeroAction = (hero) => ({
	type: types.SELECT_HERO,
	hero
})

export const searchPeopleAction = (params) => ({
	type: types.SEARCH_PEOPLE,
	params
})

export const changePaginationAction = (pagination) => ({
	type: types.CHANGE_PAGINATION,
	pagination
})