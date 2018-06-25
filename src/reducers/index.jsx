import { combineReducers } from "redux"

import people from "./peopleReducer"
import films from "./filmsReducer"
import pagination from "./paginationReducer"

const rootReducer = combineReducers({ people, films, pagination })

export default rootReducer