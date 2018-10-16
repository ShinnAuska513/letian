$(function(){
	$("#top-right").click(function() {
		if($(".navbar-outer").position().left!=0){
			$("html,body").css("overflow-y","hidden");
			$(".navbar-outer").animate({
			    left:0
		    },"500")
		}else{
			$("html,body").css("overflow-y","auto");
			$(".navbar-outer").animate({
			    left:100+"%"
		    },"500")
		}
	});
	$(".navbar-outer .navbar-list li").click(function() {
		if($(this).children('.child-mask').css('display')=="none"){
			$(this).children('.child-mask').slideDown();
			$(this).siblings().children('.child-mask').slideUp();
		}else{
			$(this).children('.child-mask').slideUp();
		}
	});
	$(".video-box .mask-inner").click(function() {
		$(".video-box .mask").fadeOut();
		$("#vid").trigger('play');
		$("#vid").attr("controls","controls");
	});
	$(".index-news .tab-list li span").click(function() {
		var i = $(this).parent().index();
		$(this).addClass('active').parent().siblings().children().removeClass('active');
		$(".index-news .index-news-list .list-inner").eq(i).addClass('shows').siblings().removeClass('shows');
	});
	$(".porduct-details-info .product-details-tab .top-tab li").click(function() {
		var i = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".porduct-details-info .details-tab-outer .details-tab-inner").eq(i).addClass('shows').siblings().removeClass('shows');
	});
})