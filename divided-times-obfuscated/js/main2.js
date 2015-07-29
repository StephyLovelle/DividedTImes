$(document).ready(function () {

	$('#primary-nav li').click(function(e) {
		e.preventDefault();


	 //handle slidedown
		//if (slide-down is not open)
		if(!$('#slide-down').hasClass('open')) {
			//show slide-down
			$('#slide-down').show().addClass('open');

			//slide-down.addClass('open')
		 $('#slide-down').addClass('open');

			//active class for li
		 $(this).addClass('active');
		}

		//else if (slide-down is open and link has active class)

		else if($('#slide-down').hasClass('open') && $(this).hasClass('active')) {
			//hide slide-down
			$('#slide-down').hide().addClass('open');

			//slide-down.removeClass('open')
			$('#slide-down').removeClass('open');

			//active class for li 
			$(this).removeClass('active');
		}
		else {
			$('#slide-down').show().addClass('open');
			$(this).addClass('active');
		}
 
		//else (click on non-active link while slide-down is open)
		$(this).siblings().removeClass('active');



		//handles primary nav active 



		 //handles hide / show of drop sections
		 var section = $(this).children('a').attr('href');
		 $(section).show();

		 $(section).siblings().hide();
		}	
	);

});