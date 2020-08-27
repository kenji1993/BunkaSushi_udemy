$(document).ready(function(){
	$('#mnocturno').on('click', function(){
		$(this).toggleClass('dark'),
		$('body').toggleClass('bodydark'),
		$('header').toggleClass('headerdark')


  });	
});