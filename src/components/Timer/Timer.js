import React, {useEffect, useRef, useState} from "react";

const Timer = () => {
	const [timerDays, setTimerDays] = useState('00')
	const [timerHours, setTimerHours] = useState('00')
	const [timerMinutes, setTimerMinutes] = useState('00')
	const [timerSeconds, setTimerSeconds] = useState('00')

	let ref = useRef();

	const startTimer = () => {
		const countDownDate = new Date('01, 01, 2022, 00:00:00').getTime();

		ref = setInterval(() => {
			const now = new Date().getTime()
			const distance = countDownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
			const minutes = Math.floor((distance % (1000 * 60 * 60) / ( 1000 * 60)));
			const seconds = Math.floor((distance % (1000 * 60) / 1000));

			if (distance < 0) {
				clearInterval(ref.current)
			} else {
				setTimerDays(days);
				setTimerHours(hours)
				setTimerMinutes(minutes)
				setTimerSeconds(seconds)
			}
		}, 1000)
	}

	useEffect(()=> {
		startTimer()
		return () => {
			clearInterval(ref)
		}
	})

	const handleZeroDateFormatter  = count => count <10 ? `0${count}` : count;


	const handleDateFormatter = date => {
		if (date % 10 <= 4 && date % 10 >1) {return 'ы'}
		if (date % 10  === 1) {return 'a'}
		return ''
	}
	const handleHoursFormatter = hour => {
		if (hour % 10 <= 4 && hour % 10 >1) {return 'a'}
		if (hour % 10 === 1) {return ''}
		return 'ов'
	}

	const handleDaysFormatter = day => {
		if (day % 10 <= 4 && day % 10 >1) {return 'дня'}
		if (day % 10 === 1) {return 'день'}
		return 'дней'
	}

	return (
		<section className="timer">
			<div className='timer__wrapper'>
				<div className='timer__time-block'>
					<p className="timer__text txt-1">{handleZeroDateFormatter(timerDays)}</p>
					<p className="timer__text txt-1"><small>{handleDaysFormatter(timerDays)}</small></p>
				</div>
			</div>
			<span>:</span>
			<div className='timer__wrapper'>
				<div className='timer__time-block'>
					<p className="timer__text txt-1">{handleZeroDateFormatter(timerHours)}</p>
					<p className="timer__text txt-1"><small>{`час${handleHoursFormatter(timerHours)}`}</small></p>
				</div>
			</div>
			<span>:</span>
			<div className='timer__wrapper'>
				<div className='timer__time-block'>
					<p className="timer__text txt-1">{handleZeroDateFormatter(timerMinutes)}</p>
					<p className="timer__text txt-1"><small>{`минут${handleDateFormatter(timerMinutes)}`}</small></p>
				</div>
			</div>
			<span>:</span>
			<div className='timer__wrapper'>
				<div className='timer__time-block'>
					<p className="timer__text txt-1">{handleZeroDateFormatter(timerSeconds)}</p>
					<p className="timer__text txt-1"><small>{`секунд${handleDateFormatter(timerSeconds)}`}</small></p>
				</div>
			</div>
		</section>
	)
}

export default Timer;


