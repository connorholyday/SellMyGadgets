$(document).ready(function(){
	$('.view--list').on('click', function(e){
		e.preventDefault();
		$('.display--grid').removeClass('display--grid').addClass('display--list');
	});

	$('.view--grid').on('click', function(e){
		e.preventDefault();
		$('.display--list').removeClass('display--list').addClass('display--grid');
	});

	var $dropZone = $('.drop-zone');

	$dropZone.hover(
		function(){
			$('.anim').removeClass('__anim').addClass('_anim');
			$('.anim2').removeClass('__anim2').addClass('_anim2');
			$('.anim3').removeClass('__anim3').addClass('_anim3');
		},
		function(){
			$('.anim').addClass('__anim').removeClass('_anim');
			$('.anim2').addClass('__anim2').removeClass('_anim2');
			$('.anim3').addClass('__anim3').removeClass('_anim3');
		});
});