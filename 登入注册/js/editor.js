$(function(){
	$(".editor_title a").click(function(){
		$(this).addClass("editor_active").siblings().removeClass("editor_active");
		var _this = $(".editor_title a").index(this);
		$(".editor_div").eq(_this).show().siblings().hide();
	});
	$(".cz_a a").click(function(){
		$(this).addClass("cz_tur").siblings().removeClass("cz_tur");
	});
});
