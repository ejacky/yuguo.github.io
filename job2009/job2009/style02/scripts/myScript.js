$(function(){
	
	$("#find-me ul").add($("#link-list ul")).css("display","none");

	$("#find-me h2").add($("#link-list h2")).css({
		position:"relative",
		left:"-80px"
	});
	$("#sidebar h2").mouseenter(showList);
	$("#find-me").add($("#link-list")).mouseleave(hideList);
	
	$("#sidebar a").hover(showItem,hideItem);
	
}
);

var showList = function(e){
	var head = $(e.target);
	var ulist = head.siblings("ul");
	head.stop();
	head.animate({left:0},"fast",function(){
	ulist.slideDown("fast");
	});
	return this;
};

var hideList = function(e){
	var head = $(e.target).parents("#find-me,#link-list").andSelf().children("h2");
	var ulist = head.siblings();
	head.stop();
	ulist.slideUp("fast",function(){
	head.animate({left:-80},"fast");
	});

	return this;
};

var showItem = function(e){
	var li = $(e.target);
	li.animate({
		paddingRight:30
	},"fast");
}

var hideItem = function(e){
	var li = $(e.target);
	li.animate({
		paddingRight:0
	},"fast");
}