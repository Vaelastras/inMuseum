import youTubeLogo from '../images/icons/youtube-logo.svg'
import vkLogo from '../images/icons/vk-logo.svg';
import facebookLogo from '../images/icons/fb-logo.svg';
import instagramLogo from '../images/icons/instagram-logo.svg';
import logo from '../images/project-logo.png'

import organizatorImageMuseum from '../images/project-logo.png';
import organizatorImageICOM from '../images/ICOM-logo.jpg';
import organizatorImageKoleso from '../images/Koleso-icon.jpg';

import supportVklad from '../images/vklad-sb-icon.jpg';
import supportVPF from '../images/VPF-icon.jpg';
import supportCulture from '../images/culture-icon.jpg';

import noImage from '../images/cards/no-image.png';
import firstCardMainPicture from '../images/cards/card-1.jpg'
import secondCardMainPicture from '../images/cards/card-2.jpg'
import thirdCardMainPicture from '../images/cards/card-3.jpg'
import firstMiniCard from '../images/cards/mini/card-mini-1.jpg'
import secondMiniCard from '../images/cards/mini/card-mini-2.jpg'
import thirdNiniCard from '../images/cards/mini/card-mini-3.jpg'
const cardTextIntro = 'Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития.'
const cardTextParagraph = 'Постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации новых предложений.'

export const socialLogoArr = [
	{
		id: 1,
		alt: 'YouTube-logo',
		src: youTubeLogo,
		link: 'https://www.youtube.com/channel/UC2-fJsQR7jvwIl_0bQwSvDg',
		title: 'Check us at Youtube'
	},{
		id: 2,
		alt: 'Vkontakte-logo',
		src: vkLogo,
		link: 'https://vk.com/inmuseumrus',
		title: 'Check us at Vkontakte'
	},{
		id: 3,
		alt: 'Facebook-logo',
		src: facebookLogo,
		link: 'https://www.facebook.com/icluseumrus',
		title: 'Check us at FaceBook'
	},{
		id: 4,
		alt: 'Instagram-logo',
		src: instagramLogo,
		link: 'https://www.instagram.com/inmuseumrus/',
		title: 'Check us at Instagram'
	}
];

export const projectLogo = {
	title: "Inclusive museum",
	src: logo,
	alt: 'inclusive museum logo'
}

export const partners = [
	{
		id: 1,
		title: 'Организаторы',
		visible: true,
		images: [{
			id: 1,
			title: 'Инклюзивный музей',
			alt: 'Инклюзивный музей',
			src: organizatorImageMuseum,
			link: 'https://in-museum.ru/'
		},{
			id: 2,
			title: 'Российский комитет Международного совета музеев (ИКОМ России)',
			alt: 'Российский комитет Международного совета музеев (ИКОМ России)',
			src: organizatorImageICOM,
			link: 'https://icom-russia.com/'
		},{
			id: 3,
			title: 'АНО «Колесо Обозрения»',
			alt: 'АНО «Колесо Обозрения»',
			src: organizatorImageKoleso,
			link: 'https://kolesobzora.ru/'
			}]
	}, {
		id: 2,
		title: 'При поддержке',
		visible: true,
		images: [{
			id: 1,
			title: 'Благотворительный фонд Сбербанка «Вклад в будущее»',
			alt: 'Благотворительный фонд Сбербанка «Вклад в будущее»',
			src: supportVklad,
			link: 'https://vbudushee.ru/'
		}, {
			id: 2,
			title: 'Благотворительный фонд Владимира Потанина',
			alt: 'Благотворительный фонд Владимира Потанина',
			src: supportVPF,
			link: 'https://www.fondpotanin.ru/'
		}, {
			id: 3,
			title: 'Культура.рф',
			alt: 'Культура.рф',
			src: supportCulture,
			link: 'https://www.culture.ru/'
		}]
	}, {
		id: 3,
		title: 'Партнёры',
		visible: false,
		images: []
	}
];

export const initialCards =  [
	{
		id: 1,
		title: `“Неудобные вопросы об инвалидности”` || cardTextIntro,
		about: cardTextIntro || '',
		description: cardTextParagraph || '',
		image: firstCardMainPicture || noImage,
		pictures: [firstMiniCard, secondMiniCard, thirdNiniCard],
		url: '',
		side: true
	}, {
		id: 2,
		title: `“Как я понял что у меня инвалидность”`,
		about: 'Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития.',
		description: 'Постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации новых предложений.',
		image: secondCardMainPicture,
		pictures: [firstMiniCard, secondMiniCard, thirdNiniCard],
		url: '',
		side: false
	}, {
		id: 3,
		title: `“Как помогает ваше домашнее животное в жизни”`,
		about: 'Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития.',
		description: 'Постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. Повседневная практика показывает, что консультация с широким активом способствует подготовки и реализации новых предложений.',
		image: thirdCardMainPicture,
		pictures: [firstMiniCard, secondMiniCard, thirdNiniCard],
		url: '',
		side: true
	}
]
