import React, {Component} from "react"
import propTypes from "prop-types"

import Header from "../common/Header"

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = {
    children: propTypes.object.isRequired
}

export default App