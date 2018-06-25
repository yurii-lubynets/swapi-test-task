import React from "react"
import propTypes from "prop-types"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const HeroCard = ({selectedHero, films}) => (
    <Card>
        <CardContent>
            <Typography variant="headline" gutterBottom>{selectedHero.name}</Typography>
            <Typography color="textSecondary">Height: {selectedHero.height}</Typography>
            <Typography color="textSecondary">Mass: {selectedHero.mass}</Typography>
            <Typography color="textSecondary">Hair Color: {selectedHero.hair_color}</Typography>
            <Typography color="textSecondary">Gender: {selectedHero.gender}</Typography>
            <Typography color="textSecondary"> 
                {films ? films
                    .map((film, id) => (<span key={id}>{film}</span>))
                    .reduce((prev, curr) => [prev, ', ', curr])
                : '-'}
            </Typography>
        </CardContent>
    </Card>
)


HeroCard.propTypes = {
    selectedHero: propTypes.object,
    films: propTypes.array
}

export default HeroCard
