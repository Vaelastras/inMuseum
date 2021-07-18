import React from "react";
import {initialCards} from "../../assets/js/constants";
import Card from '../Card/Card';

function Project () {

	return (
		<section className="projects">
			<div className="project__header">
				<h3 className="project__title">Проекты</h3>
			</div>
			<div className="project__wrapper">
				{initialCards.map((card, index) => {
					const {image, title, url} = card;
					return (

						<Card
							image={image}
							title={title}
							url={url}
							key={index}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Project;
