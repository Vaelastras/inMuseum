import React from "react";
import About from "../About/About";
import Description from "../Description/Description";
import Project from "../Project/Project";
import Afisha from "../Afisha/Afisha";
import Partners from "../Partners/Partners";

function Main () {
	return (
		<main className='main'>
			<About/>
			<Description/>
			<Project/>
			<Afisha/>
			<Partners/>
		</main>
	)
}

export default Main;
