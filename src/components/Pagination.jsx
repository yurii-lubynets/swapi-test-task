import React from "react"
import propTypes from "prop-types"

import Button from "@material-ui/core/Button"

const Pagination = ({pagination, onHandleChangePagination}) => (
    <div>
        <Button 
            color="primary" 
            onClick={onHandleChangePagination.bind(this, pagination.previous)}
            disabled={!pagination.previous}>
            Previous
        </Button>
        <Button 
            color="primary" 
            onClick={onHandleChangePagination.bind(this, pagination.next)}
            disabled={!pagination.next}>
            Next
        </Button>
    </div>
)

Pagination.propTypes = {
    onHandleChangePagination: propTypes.func.isRequired
}

export default Pagination
