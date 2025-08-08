const playbutton = document.querySelector('.fleet-travel__playbutton')

playbutton.addEventListener('click', function () {
	playbutton.classList.toggle('active')
	playbutton.classList.add('clicked')

	// Удаляем класс после завершения анимации
	setTimeout(() => {
		playbutton.classList.remove('clicked')
	}, 300) // Время должно совпадать с анимацией
})
