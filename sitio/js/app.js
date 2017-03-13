$(function() {



      $('.open-menu-top').on('click', function(){
      	$(".open-menu-top").css('display','none');
		$(".list-menu-top").fadeIn();
		$(".close-menu-top").css('display','block');

	});

       $('.close-menu-top').on('click', function(){
      $(".list-menu-top").fadeOut(700);
      	$(".close-menu-top").css('display','none');
		$(".open-menu-top").fadeIn();
		

	});




} );


function cerrar_menu(){
	$(".list-menu-top").fadeOut(700);
      	$(".close-menu-top").css('display','none');
		$(".open-menu-top").fadeIn();
		

}