import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

const Header = () => (
	<AppBar position="static" color="default">
		<Toolbar>
			<h3>Welcome to Star Wars Heroes List built with React, Redux, and Redux-saga </h3>
		</Toolbar>
	</AppBar>
)

export default Header