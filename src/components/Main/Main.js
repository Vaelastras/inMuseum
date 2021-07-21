import React from "react";
import { useLocation } from 'react-router-dom'
import About from "../About/About";
import Description from "../Description/Description";
import Project from "../Project/Project";
import Afisha from "../Afisha/Afisha";
import Partners from "../Partners/Partners";

function Main () {
	const location = useLocation();

	return (
		<main className='main'>
			{(location.pathname !== "/") && (
				<div className="main__title-wrapper">
					<h1	className='main__title'>Проекты</h1>
				</div>
			)}
			<About/>
			<Description/>
			<Project/>
			<Afisha/>
			<Partners/>
		</main>
	)
}

export default Main;
