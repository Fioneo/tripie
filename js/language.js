document.addEventListener('DOMContentLoaded', () => {
	const selectHeader = document.querySelector('.select__header')
	const selectBody = document.querySelector('.select__body')
	const selectCurrent = document.querySelector('.select__current')
	const selectItems = document.querySelectorAll('.select__item')

	selectHeader.addEventListener('click', () => {
		selectBody.classList.toggle('active')
	})

	selectItems.forEach(item => {
		item.addEventListener('click', () => {
			const currentText = item.textContent
			selectCurrent.textContent = currentText
			selectBody.classList.remove('active')
		})
	})
})
