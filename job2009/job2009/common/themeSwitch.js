 //载入一个主题（包括CSS和JavaScript）
   function addTheme (themeItem) {
		scriptList = themeItem.scriptList;
		styleList = themeItem.styleList;
		navBgColor = themeItem.navBgColor;
		
		//载入脚本
		for(scriptItem in scriptList){
			addScript(scriptList[scriptItem]);
		}
		
		//在载入主题特有的CSS文件之前先载入reset.css，因为这个文件是共用的，所以没有放在每个主题的数组中。
		addStyle("common/reset.css");
		addStyle("common/nav.css");
		for(styleItem in styleList){
			addStyle(styleList[styleItem]);
		}
   }
   
   function removeTheme(themeItem) {
		scriptList = themeItem.scriptList;
		styleList = themeItem.styleList;
		
		for(scriptItem in scriptList){
			$("head")[0].removeChild(scriptList[scriptItem]);
		}
		for(styleItem in styleList){
			addStyle(styleList[styleItem]);
		}
   }
   
   //载入CSS
   function addStyle (srcName){
		var oLink = document.createElement("link");
		oLink.type = "text/css";
		oLink.rel = "stylesheet";
		oLink.href = srcName;
		$("head")[0].appendChild( oLink);  
   }
   
   //载入JavaScript
   function addScript (srcName){
		var oScript= document.createElement("script");
		oScript.type = "text/javascript";
		oScript.src=srcName;
		$("head")[0].appendChild( oScript);
   }
   
   function initNav (){
   
		$("#wrapper").before("<div id='nav'><ul></ul></div>");
		
		if(eval(currentTheme).navBgColor){
			$("#nav").css("background",eval(currentTheme).navBgColor);
			}
		for(var i = 1; i <= themeCount; i++){
			var themeID = "";
			if(i<10)
				themeID = "theme0" + i;
			else
				themeID = "theme" + i;
			
			var themeItem = eval(themeID);
			var imgItem = $("<img src='"+ themeItem.thumb+"' alt='" + themeItem.name + "'/>");
			if(themeID == currentTheme)
				imgItem.css("border","2px #c30 solid");
			imgItem.appendTo("#nav ul");
			imgItem.data("ID",themeID);
		}
		$("#nav img").css("cursor","pointer").wrap("<li></li>");
		
		
		$("<a id='themeShuffle' href='http://yuguodesign.com' name='随机更换主题'>随机</a>").appendTo("#nav")
		.click(function(){
			$("script[src*=style02]").each(function(){
				this.disabled = true;
				alert(this);
			});
			
			$.cookie("theme",null);
			location.reload();
			return false;
			}
		);
		
		$("<a id='contactMe' class='iframe' href='http://www.icebrrg.com/Public/EmbedForm.aspx?formID=40262' name='联系我'>联系我</a>")
		.appendTo("#nav")
		.fancybox({
			"frameWidth":450,
			"frameHeight":500,
			"overlayOpacity":0.6
		});
		}
	
	var theme01 = {
		name : "this side up",
		thumb : "style01/thumb.jpg",
		scriptList : new Array("style01/scripts/myScript.js"),
		styleList : new Array("style01/style.css")
	};
	
	var theme02 = {
		name : "starbuck",
		thumb : "style02/thumb.jpg",
		scriptList : new Array("style02/scripts/myScript.js"),
		styleList : new Array("style02/style.css")
	};
	
	var theme03 = {
		name : "pixer press",
		thumb : "style03/thumb.jpg",
		styleList : new Array("style03/style.css")
	}
	
	var theme04 = {
		name : "sketch",
		thumb : "style04/thumb.jpg",
		styleList : new Array("style04/style.css"),
		navBgColor:"#000000"
	}
	
	var theme05 = {
		name : "sketch",
		thumb : "style05/thumb.jpg",
		styleList : new Array("style05/style.css")
	}
	//基本HTML下载完成就开始执行：
	var themeCount = 5;
	var currentTheme = $.cookie('theme') ;
	if(!currentTheme) currentTheme = "theme0" + parseInt(themeCount*Math.random() + 1);
	addTheme(eval(currentTheme));
	
	//页面中除图片部分下载完成就开始执行：
	$(function(){
		//初始化顶部导航条
		initNav();
		
		//绑定hover事件
		$("#nav ul img")
		.hover(function(e){
			$(this).hoverFlow(e.type,
			{
			width:64,
			height:64
			},"fast");
		},function(e){
			$(this).hoverFlow(e.type,
			{
			width:32,
			height:32
			},"fast");
		});
		
		//绑定click事件
		$("#nav ul img").click(function(){
			var ID = ($(this).data("ID"));
			$.cookie("theme",ID,{expires:30});
			location.reload(); 
		});
	});