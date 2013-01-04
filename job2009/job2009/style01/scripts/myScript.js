	$(function(){
		$("li>a")
		.hover(function(e){
			$(this).hoverFlow(e.type,
			{
			paddingLeft:"1em"
			},300);
		},function(e){
			$(this).hoverFlow(e.type,
			{
			paddingLeft:"0"
			},500);
		});
	
	});