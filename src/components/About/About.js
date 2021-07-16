import React from "react";
import museumPicture from "../../assets/images/museum-for-all.jpg";
import museumPictureMob from "../../assets/images/museum-for-all-mob.jpg";

function About () {
	const worldDate = new Date();
	const eventDate = new Date('01-01-2022')
	const diffDate = Math.ceil(Math.abs(eventDate.getTime() - worldDate.getTime()) / (1000 * 3600 * 24));

	function handleCounterDayRemainer (count) {
		if (count % 10 === 0 || count % 10 >= 5 ) {return ' дней'}
		if (count % 10 <= 4 && count % 10 !== 1 ) {return ' дня'}
		return ' день'
	}

	return (
		<section className='about'>
			<div className='about__wrapper'>
				<h1 className="about__title">Всероссийская инклюзивная акция</h1>
				<img className='about__logo' src={ window.innerWidth <= 768 ? museumPictureMob : museumPicture } alt='assorty logo' title='Inclusive museum title'/>
				<p className="about__text txt-3">Выставки, экскурсии, концерты, театральные квесты и мастер-классы для детей и взрослых, с инвалидностью и без</p>
				<div className="about__event">
					{diffDate > 0 && (
						<>
							<p className="about__event-date">01-03 января 2022</p>
							<p className="about__event-text txt-1">До начала акции осталось: <span className={`about__event-text-counter`}>{diffDate + handleCounterDayRemainer(diffDate)}</span></p>
						</>
						)
					}
				</div>
			</div>
		</section>
	)
}

export default About;
