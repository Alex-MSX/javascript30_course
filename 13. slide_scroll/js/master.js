const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
  // window.scrollY me dice cuanto llevo de scroll en la página con respecto a la parte superior del navegador
  // window.innerHeight me dice el tamaño de la pantalla del navegador
  // offsetTop me dice la altura de cada elemento con respecto al inicio de la página

  sliderImages.forEach(image => {
    // "Distancia" de la imagen desde el inicio hasta la mitad
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2

    // "Distancia" de la imagen desde el inicio hasta la parte de abajo
    const imageBottom = image.offsetTop + image.height

    const isHalfShown = slideInAt > image.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active')
    } else {
      image.classList.remove('active')
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide))

function debounce(func, wait = 20, immediate = true ) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
