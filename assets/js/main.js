/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

function adjustLinks() {
	// Detectar si el dispositivo es móvil
	if (window.innerWidth <= 768) { // Cambia el valor si necesitas ajustar el tamaño para móviles
	  const links = document.querySelectorAll('.dynamic-link');
	  links.forEach(function(link) {
		link.href = "images/webRestaurante.png"; // Cambia el destino del enlace a la imagen
	  });
	} else {
	  const links = document.querySelectorAll('.dynamic-link');
	  links.forEach(function(link) {
		link.href = "restaurante/index.html"; // Restaura el destino del enlace original
	  });
	}
  }
  
  // Ajustar enlaces cuando se cargue la página
  window.addEventListener('load', adjustLinks);
  
  // Ajustar enlaces cuando se redimensione la ventana
  window.addEventListener('resize', adjustLinks);
  
  