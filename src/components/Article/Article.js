import React from "react";
import Button from "../Button/Button";

function Article (props) {

	const { title, about, description, image, pictures, url } = props;
	return (
		<section className="article">
			<div className="article__wrapper">
				<div className='article__header'>
					<h2 className="article__title txt-1">{title}</h2>
				</div>
				<div className="article__content">
					<div className="article__image-block">
						<ul className="article__image-preview">
							{pictures.map((item, idx) => {
								return (
									<div className='article__image-min-wrapper'>
										<img src={item} alt={idx} className="article__image-min"/>
									</div>
								)
							})}
						</ul>
						<img src={image} alt="" className="article__image"/>
					</div>
					<div className="article__text-block">
						<div className="article__text-block-content">
						<p className="article__text txt-4">{about}</p>
						<p className="article__text txt-4">{description}</p>
						</div>
						<div className='article__button'>
							<a className='article__link' id='article-link' href={url} title={`Подробнее о статье ${title}`} rel='noreferrer'>
								<Button/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Article;
