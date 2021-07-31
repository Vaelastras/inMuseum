import React from "react";
import museumPicture from "../../assets/images/museum-for-all.jpg";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";

function About () {
	return (
		<section className='about' id='about'>
			<div className='about__wrapper'>
				<h1 className="about__title">Всероссийская инклюзивная акция</h1>
				<img className='about__logo' src={museumPicture} alt='assorty logo' title='Inclusive museum title'/>
				<p className="about__text txt-3">Выставки, экскурсии, концерты, театральные квесты и мастер-классы для детей и взрослых, с инвалидностью и без</p>
				<div className="about__event">
					<p className="about__event-date">01-03 января 2022</p>
						<p className="about__event-text txt-1">До начала акции осталось: {
							<Timer/>
						}
						</p>
				</div>
				<Button/>
			</div>
		</section>
	)
}

export default About;
