import React from "react";
import Button from "../Button/Button";

function Article (props) {

	const {cards} = props;

	return (
		cards.map(item => (
			<section className="article">
				<div className="article__wrapper">
					<div className='article__header'>
						<h2 className="article__title txt-1">{item.title}</h2>
					</div>
					<div className={`article__content ${item.side ? 'article__content_reverse': ''}`}>
						<div className="article__image-block">
							<ul className="article__image-preview">
								{item.pictures.map((image, idx) => {
									return (
										<div className='article__image-min-wrapper'>
											<img src={image} alt={idx} className="article__image-min"/>
										</div>
									)
								})}
							</ul>
							<img src={item.image} alt="" className="article__image"/>
						</div>
						<div className="article__text-block">
							<div className="article__text-block-content">
								<p className="article__text txt-4">{item.about}</p>
								<p className="article__text txt-4">{item.description}</p>
							</div>
							<div className='article__button'>
								<a className='article__link' id='article-link' href={item.url} title={`Подробнее о статье ${item.title}`} rel='noreferrer'>
									<Button/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
	))
)}

export default Article;
