$(function(){
	
	$("#jobWantedClose").click(function(){
		$("#jobWanted").animate({bottom:-30},1000,"easeOutBounce");
	});
	$("#jobWantedLogo").click(function(){
		$("#jobWanted").animate({bottom:0},1000,"easeOutElastic");
	});
	}
);