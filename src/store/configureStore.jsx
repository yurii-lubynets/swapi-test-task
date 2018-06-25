import { createStore, applyMiddleware } from "redux"
import {createLogger} from "redux-logger"
import createSagaMiddleware from "redux-saga"

import rootReducer from "../reducers"
import rootSaga from "../sagas"

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware() 
	return {
		...createStore(
			rootReducer, 
			applyMiddleware(
				sagaMiddleware,
				createLogger()
			)
		),
		runSaga: sagaMiddleware.run(rootSaga)
	}
}

export default configureStore