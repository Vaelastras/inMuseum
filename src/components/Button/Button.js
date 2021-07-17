import React from "react";
import {useLocation} from 'react-router-dom';

function Button () {
	const {pathName} = useLocation();
	const buttonBackgroundValue = pathName !== "/" ? '' : 'btn_white'
	const buttonSizeValue = window.innerWidth > 768 && pathName !== "/" ? 'bnt-lg' : '';
	const buttonTextValue = pathName !== '/project' ? 'Афиша мероприятий' : 'Перейти'

	return (
		<button className={`btn btn-text ${buttonSizeValue} ${buttonBackgroundValue}`} >{buttonTextValue}</button>
	)
}

export default Button;
