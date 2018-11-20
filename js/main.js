
/*Запуск ссылков выше*/


$(document).ready(function () {

	//min font size
	var min=5; 	

	//max font size
	var max=300;	
	
	//grab the default font size
	var reset = $('p').css('fontSize'); 
	
	//font resize these elements
	var elm = $('p, p.ending');  
	
	//set the default font size and remove px from the value
	var size = str_replace(reset, 'px', ''); 
	
	//Increase font size
	$('a.fontSizePlus').click(function() {
		
		//if the font size is lower or equal than the max value
		if (size<=max) {
			
			//increase the size
			size++;
			
			//set the font size
			elm.css({'fontSize' : size});
		}
		
		//cancel a click event
		return false;	
		
	});

	$('a.fontSizeMinus').click(function() {

		//if the font size is greater or equal than min value
		if (size>=min) {
			
			//decrease the size
			size--;
			
			//set the font size
			elm.css({'fontSize' : size});
		}
		
		//cancel a click event
		return false;	
		
	});
	
	//Reset the font size
	$('a.fontReset').click(function () {
	
	size=str_replace(reset, 'px', ''); 
		//set the default font size	
		 elm.css({'fontSize' : reset});		
	});
		
});

//A string replace function
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}
	
	/*Увеличение текста выше*/

jQuery(document).ready(function($){
	var is_bouncy_nav_animating = false;
	//open bouncy navigation
	$('.cd-bouncy-nav-trigger').on('click', function(){
		triggerBouncyNav(true);
	});
	//close bouncy navigation
	$('.cd-bouncy-nav-modal .cd-close').on('click', function(){
		triggerBouncyNav(false);
	});
	$('.cd-bouncy-nav-modal').on('click', function(event){
		if($(event.target).is('.cd-bouncy-nav-modal')) {
			triggerBouncyNav(false);
		}
	});

	function triggerBouncyNav($bool) {
		//check if no nav animation is ongoing
		if( !is_bouncy_nav_animating) {
			is_bouncy_nav_animating = true;
			
			//toggle list items animation
			$('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				$('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
				if(!$bool) $('.cd-bouncy-nav-modal').removeClass('fade-out');
				is_bouncy_nav_animating = false;
			});
			
			//check if CSS animations are supported... 
			if($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0 ) {
				$('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
				is_bouncy_nav_animating = false;
			}
		}
	}
});