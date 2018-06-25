import React from "react"
import propTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
})

const CircularIndeterminate = ({classes}) => (
    <CircularProgress className={classes.progress} size={50} />
)

CircularIndeterminate.propTypes = {
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(CircularIndeterminate)