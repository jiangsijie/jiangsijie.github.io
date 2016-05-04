$( function() {
	$(".my-nav > li").hover( function() {
		$(this).find('ul').show();
	}, function() {
		$(this).find('ul').hide();
	});

	var oTimer = null,
		$showPic = $('.show-pic'),
		$imgWrap = $('.show-wrapper'),
		$picBac = $('.show-wrapper > div'),
		$picNav = $('.pic-nav'),
		$bigNav = $('.pic-nav1'),
		$smNav = $('.pic-nav2'),
		$showNav, index = 0;

	init();

    $(window).resize( function() {
  		resizeWin();
  		changeNav();
  		clearInterval(oTimer);
  		//保持在调整窗口大小前显示的div
  		var str = 'translate3d(-' + ((index*$picBac.eq(0).width())) + 'px, 0px, 0px';
		$imgWrap.css('transform', str)
			.css('transition-duration', '0s');
		$showNav.find('li').removeClass("on")
            .eq(index).addClass("on");
		startInterval();	
	}).trigger('resize');//跟上面的resizeWin()必须都有，否则会出错


	function init() {
		changeNav();
		$showNav.find('li').eq(0).addClass("on");
		//全屏显示多个div
		resizeWin();
		//初始自动播放
		$imgWrap.trigger('mouseleave');
	}
	function resizeWin() {
  		$picBac.width($('.show-pic').width());
  		$showNav.width($picBac.width());
  		$imgWrap.width($picBac.width()*6);
	}
	function slideImg(index) {
		var str = 'translate3d(-' + ((index * $picBac.eq(0).width())) + 'px, 0px, 0px';
		$imgWrap.css('transform', str)
			.css('transition-duration', '0.3s');
        $showNav.find('li').removeClass("on")
            .eq(index).addClass("on");
	}
	function startInterval() {
		oTimer = setInterval(function(){
			if(index == $picBac.length-1) {
				index = 0;
			}else {
				index++;
			}
			slideImg(index);
		}, 3000);
	}
	function changeNav() {
	 	if($('body').width()>1120) {
  			$bigNav.css('display', 'block');
  			$smNav.css('display', 'none');
  			$showNav = $bigNav;
			$showPic.bind('mouseenter', fn1);
			$showPic.bind('mouseleave', fn2);
			$bigNav.find('li').bind('mouseenter', fn3);
  		} else {
  			$bigNav.css('display', 'none');
  			$smNav.css('display', 'block');  
  			$showPic.unbind('mouseenter', fn1);
			$showPic.unbind('mouseleave', fn2);
  			$showNav = $smNav;			
  		}
	}
	function fn1() {
		clearInterval(oTimer);
		$picNav.animate({"height":"50px"},100);		
	}
	
	function fn2() {
		$picNav.animate({"height":"3px"},100);
		clearInterval(oTimer);
		startInterval();	
	}
	
	function fn3() {
		index = $(this).index();
	   	slideImg(index);
	}
});