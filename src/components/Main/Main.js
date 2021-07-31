import React from "react";
import {Route, Switch} from 'react-router-dom'
import Article from "../Article/Article";
import {initialCards} from "../../assets/js/constants";
import About from "../About/About";
import Description from "../Description/Description";
import Project from "../Project/Project";
import Afisha from "../Afisha/Afisha";
import Partners from "../Partners/Partners";

function Main () {

	return (
		<main className='main'>
			<Switch>
				<Route exact path={"/"}>
					<About/>
					<Description/>
					<Project/>
					<Afisha/>
					<Partners/>
				</Route>
				<Route path={'/project'}>
					<div className="main__title-wrapper">
						<h1	className='main__title'>Проекты</h1>
					</div>
					<Article
						cards={initialCards}/>
				</Route>
				<Route path={"*"}>
					<About/>
					<Description/>
					<Project/>
					<Afisha/>
					<Partners/>
				</Route>
			</Switch>
		</main>
	)
}

export default Main;
