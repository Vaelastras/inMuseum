import React from "react";
import {useLocation} from 'react-router-dom';

function Button () {
	const {pathName} = useLocation();
	const buttonTextSize = pathName !== '/project' ? 'btn-text-l' : 'btn-text-m'
	const buttonTextValue =  pathName !== '/project' ? 'Афиша мероприятий' : 'Перейти'

	return (
		<button className={`btn ${buttonTextSize}`}>{buttonTextValue}</button>
	)
}

export default Button;
