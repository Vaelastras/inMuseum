import React from "react";
import { socialLogoArr } from '../../assets/js/constats';


function SocialMenu () {
	return (
		<ul className="footer__social">
			{socialLogoArr.map(elem => {
				return (
						<li className="footer__social-item" key={toString(elem.id)+elem.alt}>
							<div className="footer__social-item-wrapper">
								<a href={elem.link} title={elem.title} className='footer__social-link'>
									<img className='footer__social-logo' src={elem.src} alt={elem.alt}/>
								</a>
							</div>
						</li>
					)
			})}
		</ul>
	)
}

export default SocialMenu;
