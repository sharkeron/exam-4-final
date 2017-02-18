(function() {
	'use strict';

	$(function() {

		$('.slider').slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			draggable     : false,
			arrows        : true,
			dots          : false,
			infinite      : true,
			responsive    : [
				{
					breakpoint: 769,
					settings  : {
						arrows: false
					}
				}
			]
		});

		$(document).on('click', 'header .head-bottom .link a', function(e) {

			e.preventDefault();

			var elemId = $(this).attr('href');

			if (elemId.length > 2) {
				var top = $(elemId).offset().top;

				$('body').animate({
					scrollTop: top
				}, 1500);
			}

		});

		$(document).on('click', '.portfolio .link a', function(e) {

			e.preventDefault();

			var elemId = $(this).attr('href');

			if (elemId.length > 2) {
				var top = $(elemId).offset().top;

				$('body').animate({
					scrollTop: top
				}, 500);
			}

		});

	});

	$(function() {

		function openPopup() {

			$('.overlay').css('display', "block");
			$('.popup').css('display', "block");
			setTimeout(function() {
				$('.overlay').css('opacity', '1');
				$('.popup').css('opacity', '1');
			}, 200);
		}

		function closePopup() {
			$('.overlay').css('opacity', '0');
			$('.popup').css('opacity', '0');
			setTimeout(function() {
				$('.overlay').css('display', "none");
				$('.popup').css('display', "none");
			}, 200);
		}

		$(document).on('click', '.about .link a', function(e) {
			e.preventDefault();

			openPopup();

		});

		$(document).on('click', '.popular .link a', function(e) {
			e.preventDefault();

			openPopup();

		});


		$(document).on('click', '.popup .close', function() {
			closePopup();
		});


		$(document).on('click', '.overlay', function() {
			closePopup();
		});

	});

	$(function() {

		$(document).on('click', '.popup form button', function(e) {

			var inputName = $('.popup form .name'),
				inputEmail = $('.popup form .email'),
				inputMsg = $('.popup form .msg');


			$(this).closest('form').find('.error').removeClass('error');

			if (inputName.val().trim().length == 0) {
				e.preventDefault();

				inputName.addClass('error');

			} else if (inputEmail.val().trim().length == 0) {
				e.preventDefault();

				inputEmail.addClass('error');

			} else if (inputMsg.val().trim().length == 0) {
				e.preventDefault();

				inputMsg.addClass('error');

			} else if (inputName.val().trim().length !== 0 && inputEmail.val().trim().length !== 0 && inputMsg.val().trim().length !== 0) {

				$('.popup form input').removeClass('error');

				$(this).submit();

			}

		})

	});

	$(function() {

		$(document).on('click', 'footer form button', function(e) {

			var inputEmail = $('footer form .email');

			$(this).closest('form').find('.error').removeClass('error');

			if (inputEmail.val().trim().length == 0) {
				e.preventDefault();

				inputEmail.addClass('error');

			} else if (inputEmail.val().trim().length !== 0) {

				$('footer form input').removeClass('error');

				$(this).submit();

			}

		})

	});

	$(function() {

		$(document).on('click', 'header .menu-toggle', function() {

			var navMenu = $('header .nav-menu');

			if (navMenu.css('display') == 'none') {
				navMenu.css('display', "block");

				setTimeout(function() {
					navMenu.css('opacity', '1');
				}, 200);
			} else {
				navMenu.css('opacity', "0");

				setTimeout(function() {
					navMenu.css('display', 'none');
				}, 500);
			}
		});

		$(document).on('click', 'footer .menu-toggle', function() {

			var navMenu = $('footer .nav-menu');

			if (navMenu.css('display') == 'none') {
				navMenu.css('display', "block");

				setTimeout(function() {
					navMenu.css('opacity', '1');
				}, 200);
			} else {
				navMenu.css('opacity', "0");

				setTimeout(function() {
					navMenu.css('display', 'none');
				}, 500);
			}
		});

	});
})();