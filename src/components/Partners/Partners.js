import React from "react";
import {partners} from '../../assets/js/constants'

function Partners () {
	return (
		<section className="partners">
			<div className="partners__wrapper">
				{
					partners.map((item, idx) => {
						return (
							item.visible && (
								<div className="patnters__block" key={idx}>
									<h3 className="partners__title">{item.title}</h3>
									<ul className="partners__list">
										{item.images.map(image => { return (
											<li className="partners__list-item" key={item.title}>
												<a href={image.link} target="_blank"  rel="noreferrer" key={image.src.value + image.id}>
													<img className='partners__logo' src={image.src} alt={image.alt} title={image.title}/>
												</a>
											</li>
											)
											}
										)}
									</ul>
								</div>
								)
							)
						}
					)
				}
			</div>
		</section>
	)
}

export default Partners;
