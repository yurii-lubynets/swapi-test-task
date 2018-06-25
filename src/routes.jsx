import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./containers/App"
import PeoplePage from "./containers/PeoplePage"


export default (
	<Route path="/" component={App}>
		<IndexRoute component={PeoplePage} />
	</Route>
)