function popupwindow(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

$(document).ready(function(){
	$(".lnb_wrap").mouseenter(function(){
		$(".sub_nav_wrap").stop().slideDown();
	})
	
	$(".header").mouseenter(function(){
		$(".sub_nav_wrap").stop().slideUp();
	})
	
	$(".sub_nav_wrap").mouseleave(function(){
		$(".sub_nav_wrap").stop().slideUp();
	})
})