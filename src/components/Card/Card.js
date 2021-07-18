import React from "react";

function Card ({image,title,url, key}) {
	return (
		<article className='card' key={key}>
			<figure className='card__body'>
				<img className='card__image' src={image} alt={title} title={title}/>
				<figcaption className="card__text-box"><h3 className='card__title txt-3'>{title}</h3>
					<label className='card__decor-line'/><a href={url} className="card__link" target='_blank' rel='noreferrer'>Узнать больше</a>
				</figcaption>
			</figure>
		</article>
	)
}

export default Card;
