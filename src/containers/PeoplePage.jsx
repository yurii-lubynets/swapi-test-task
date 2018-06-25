import React, {Component } from "react"
import { connect } from "react-redux"
import propTypes from "prop-types"

import {selectHeroAction, searchPeopleAction, changePaginationAction } from "../actions/peopleActions"

import Progress from "./../components/Progress"
import PeopleList from "./../components/PeopleList"
import HeroCard from "./../components/HeroCard"
import Pagination from "./../components/Pagination"

import Grid from "@material-ui/core/Grid"

class PeoplePage extends Component {
	constructor() {
		super()
		this.handleSelectHero = this.handleSelectHero.bind(this)
		this.handleChangePagination = this.handleChangePagination.bind(this)
	}

	componentDidMount() {
		this.props.dispatch(searchPeopleAction())
	}

	handleSelectHero(selectedHero) {
		this.props.dispatch(selectHeroAction(selectedHero))
	}

	handleChangePagination(pagination) {
		this.props.dispatch(changePaginationAction(pagination))
		this.props.dispatch(selectHeroAction())
	}

	render() {
		const { people, selectedHero, films, pagination } = this.props
		return (
			<div>
				{ people 
					? 
					<Grid container spacing={0}>
						<Grid item xs={12} sm={6}>
							<PeopleList people={people} onHandleSelectHero={this.handleSelectHero} />
						</Grid>
						<Grid item xs={12} sm={6}>
							{ selectedHero && <HeroCard films={films} selectedHero={selectedHero}/>}
						</Grid>
						<Grid item xs={12}>
							<Pagination 
								onHandleChangePagination = {this.handleChangePagination}
								pagination={pagination}
							/>
						</Grid>
					</Grid> 
					: 
				<Progress />}
			</div>
		)
	}
}

PeoplePage.propTypes = {
	people: propTypes.array,
	selectedHero: propTypes.object,
	films: propTypes.array,
}

const mapStateToProps = ({ people, films, pagination}) => ({
	people: people.people,
	selectedHero: people.selectedHero,
	films: films.films,
	pagination: pagination
})

export default connect(mapStateToProps)(PeoplePage)