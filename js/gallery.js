document.querySelectorAll('.gallery-addfavorite').forEach(item => {
	item.addEventListener('click', function () {
		const svg = this.querySelector('.gallery-addfavorite-svg')
		const path = svg.querySelector('path')
		if (svg.classList.contains('active')) {
			svg.classList.remove('active')
			path.setAttribute('fill', '#B1B5C4')
			path.setAttribute('fill-rule', 'evenodd')
		} else {
			svg.classList.add('active')
			path.setAttribute('fill', '#FD7FE9')
			path.setAttribute('fill-rule', '#FD7FE9')
		}
	})
})
const galleryimages = document.querySelectorAll('.gallery-cards__image-box')
const explorelink = document.querySelectorAll('.gallery-explorelink')

galleryimages.forEach((image, index) => {
	image.addEventListener('mouseover', function () {
		explorelink[index].style.transform = 'translate(-50%, -50%) scale(1)'
	})

	image.addEventListener('mouseout', function () {
		explorelink[index].style.transform = 'translate(-50%, -50%) scale(0)'
	})
})
const gallerybuttons = document.querySelectorAll('.gallery-controls__button')
gallerybuttons.forEach(button => {
	button.addEventListener('click', function () {
		gallerybuttons.forEach(btn => {
			btn.classList.remove('gallery-controls__button--active')
		})
		this.classList.add('gallery-controls__button--active')
	})
})
