import React from "react";
import SocialMenu from "../Social-menu/SocialMenu";

function Footer () {
	const date = new Date().getFullYear();
	return(
		<footer className='footer'>
				<a href="mailto:inmuseumrus@gmail.com"  className="footer__link"><p className="footer__text txt-4 txt-4_bold">inmuseumrus@gmail.com</p></a>
				<p className="footer__copyright txt-4">{date} &copy; Инклюзивный музей</p>
				<SocialMenu/>
		</footer>
	)
}

export default Footer;
