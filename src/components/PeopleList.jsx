import React from "react"
import propTypes from "prop-types"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const PeopleList = ({ people, onHandleSelectHero }) => (
    <List component="nav">
        {people.map((hero, i) => (
            <ListItem button key={i} onClick={onHandleSelectHero.bind(this, hero)}>
                <ListItemText primary={hero.name}/>
            </ListItem>
        ))}
    </List>
)

PeopleList.propTypes = {
    people: propTypes.array.isRequired,
    onHandleSelectHero: propTypes.func.isRequired
}

export default PeopleList