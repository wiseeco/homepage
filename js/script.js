/*
 * Author: wiseeco
 */

 $(document).ready(function(e) {
	$('.with-hover-text, .regular-link').click(function(e){
		e.stopPropagation();
	});
	
	$('.with-hover-text').hover(
		function(e) {
			$(this).css('overflow', 'visible');
			$(this).find('.hover-text')
				.show()
				.css('opacity', 0)
				.delay(200)
				.animate(
					{
						paddingTop: '25px',
						opacity: 1
					},
					'fast',
					'linear'
				);
		},
		function(e) {
			var obj = $(this);
			$(this).find('.hover-text')
				.animate(
					{
						paddingTop: '0',
						opacity: 0
					},
					'fast',
					'linear',
					function() {
						$(this).hide();
						$( obj ).css('overflow', 'hidden');
					}
				);
		}
	);
	
	var img_loaded = 0;
	var j_images = [];
	
				$(function() {
					var pause = 10;
					$(document).scroll(function(e) {
						delay(function() {

							var tops = [];

							$('.story').each(function(index, element) {
								tops.push( $(element).offset().top - 200 );
							});

							var scroll_top = $(this).scrollTop();

							var lis = $('.nav > li');

							for ( var i=tops.length-1; i>=0; i-- ) {
								if ( scroll_top >= tops[i] ) {
									menu_focus( lis[i], i+1 );
									break;
								}
							}
						},
						pause);
					});
					$(document).scroll();
				});
});


var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

function menu_focus( element, i ) {
	if ( $(element).hasClass('active') ) {
		if ( i == 6 ) {
			if ( $('.navbar').hasClass('inv') == false )
				return;
		} else {
			return;
		}
	}

	enable_arrows( i );

	if ( i == 1 || i == 6 )
		$('.navbar').removeClass('inv');
	else
		$('.navbar').addClass('inv');

	$('.nav > li').removeClass('active');
	$(element).addClass('active');

	var icon = $(element).find('.icon');

	var left_pos = icon.offset().left - $('.nav').offset().left;
	var el_width = icon.width() + $(element).find('.text').width() + 10;

	$('.active-menu').stop(false, false).animate(
		{
			left: left_pos,
			width: el_width
		},
		1500,
		'easeInOutQuart'
	);
}

function enable_arrows( dataslide ) {
	$('#arrows div').addClass('disabled');
	if ( dataslide != 1 ) {
		$('#arrow-up').removeClass('disabled');
	}
	if ( dataslide != 6 ) {
		$('#arrow-down').removeClass('disabled');
	}
	if ( dataslide == 3 ) {
		$('#arrow-left').removeClass('disabled');
		$('#arrow-right').removeClass('disabled');
	}
}

jQuery(document).ready(function ($) {
	//Cache some variables
	var links = $('.nav').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');

	function goToByScroll(dataslide) {
		var offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;

		htmlbody.stop(false, false).animate({
			scrollTop: offset_top
		}, 1500, 'easeInOutQuart');
	}

	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});

	$('.navigation-slide').click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});
});

jQuery(document).ready(function ($) {
	//Cache some variables
	var menu_item = $('.nav').find('li');

	menu_item.hover(
		function(e) {
			var icon = $(this).find('.icon');

			var left_pos = icon.offset().left - $('.nav').offset().left;
			var el_width = icon.width() + $(this).find('.text').width() + 10;

			var hover_bar = $('<div class="active-menu special-active-menu"></div>')
				.css('left', left_pos)
				.css('width', el_width)
				.attr('id', 'special-active-menu-' + $(this).data('slide') );

			$('.active-menu').after( hover_bar );
		},
		function(e) {
			$('.special-active-menu').remove();
		}
	);
});

jQuery(document).ready(function ($) {
	//Cache some variables
	var arrows = $('#arrows div');

	arrows.click(function(e) {
		e.preventDefault();

		if ( $(this).hasClass('disabled') )
			return;

		var slide = null;
		var datasheet = $('.nav > li.active').data('slide');
		var offset_top = false;
		var offset_left = false;


		switch( $(this).attr('id') ) {
			case 'arrow-up':
				offset_top = ( datasheet - 1 == 1 ) ? '0px' : $('.slide[data-slide="' + (datasheet-1) + '"]').offset().top;
				break;
			case 'arrow-down':
				offset_top = $('.slide[data-slide="' + (datasheet+1) + '"]').offset().top;
				break;

		}

		if ( offset_top != false ) {
			htmlbody.stop(false, false).animate({
				scrollTop: offset_top
			}, 1500, 'easeInOutQuart');
		}

	});
});

function goToLink(url){
    window.open(url);

}