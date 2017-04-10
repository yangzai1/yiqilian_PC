$(document).ready(function(){
	
	$('.quxiao').on('click',function(){
		
		$('input[type="text"]').val('');
		$('input[type="number"]').val('');
		$('input[type="date"]').val('');
	})
	$('.tijiao').on('click',function(){
		
		$('input[type="text"]').val('');
		$('input[type="number"]').val('');
		$('input[type="date"]').val('');
	})
	
	
	/*改这里*/
	IndexLeftClick()
	function  IndexLeftClick(){
		$('.MenuesplegableUl').delegate('li','click',function(){
			
			$(this).children().last().toggle();
			$('.MenuesplegableUl li').children().first().find('p').css('border-color','#a9aeb1');
			$(this).children().first().find('p').css('border-color','#95979e');
			
		})
		
		$('.click-test').delegate('p','click',function(){
			
			$(this).css('color','#95979e').siblings('p').css('color','');
			return false;
		})
	}
	/*改这里*/
	/*--头像开始---*/
	// MytouxiangClick()；
	// function  MytouxiangClick(){
	// 	$('.touxiang').delegate('div','click',function(){
	// 		$(this).children().last().toggle();
	// 		$('.touxiang a').children().first().find('');
	// 	})


	// }

	