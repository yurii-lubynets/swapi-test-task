import ReactDOM from "react-dom"
import React from "react"
import { Router, browserHistory } from "react-router"
import { Provider } from "react-redux"  

import registerServiceWorker from "./registerServiceWorker"
import configureStore from "./store/configureStore"
import routes from "./routes"

import "./style/styles.css"

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('root')
)
registerServiceWorker()