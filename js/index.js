$(function(){
	//购物车下拉
	$('.gouwuche').hover(function(){
		$('.gwc-xiala').stop();
		$(this).children('.gwc-xiala').slideToggle(300);
	})

	//mainbov下拉
	$('.mainbov-center>ul>li').hover(function(){
		$('div').stop();
		$(this).children('div').slideDown();
	},function(){
		$('div').stop();
		$(this).children('div').hide();
	})

	//banner轮播
	var bnnum=0;
	function banner(){
		$('.banner-imgs img').hide();
		$('.content-1-circle li').css('background','rgba(0, 0, 0, 0.4)');
		if(bnnum<=3){
			bnnum++;
			$('.banner-imgs img').eq(bnnum).fadeIn();
			$('.content-1-circle li').eq(bnnum).css('background','#fff');
		}else{
			bnnum=0;
			$('.banner-imgs img').eq(0).fadeIn();
			$('.content-1-circle li').eq(0).css('background','#fff');
		}
	}
	var t1=setInterval(banner,3000);
	$('.bannerbox').hover(function(){
		clearInterval(t1);
	},function(){
		t1=setInterval(banner,3000);
	})
	$('.left').click(function(){
		bnnum--;
		$('.banner-imgs img').hide();
		$('.content-1-circle li').css('background','rgba(0, 0, 0, 0.4)');
		if(bnnum>=0){
			$('.banner-imgs img').eq(bnnum).fadeIn();
			$('.content-1-circle li').eq(bnnum).css('background','#fff');
		}else{
			bnnum=4;
			$('.banner-imgs img').eq(bnnum).fadeIn();
			$('.content-1-circle li').eq(bnnum).css('background','#fff');
		}
	})
	$('.right').click(function(){
		bnnum++;
		$('.banner-imgs img').hide();
		$('.content-1-circle li').css('background','rgba(0, 0, 0, 0.4)');
		if(bnnum<=4){
			$('.banner-imgs img').eq(bnnum).fadeIn();
			$('.content-1-circle li').eq(bnnum).css('background','#fff');
		}else{
			bnnum=0;
			$('.banner-imgs img').eq(bnnum).fadeIn();
			$('.content-1-circle li').eq(bnnum).css('background','#fff');
		}
	})
	$('.content-1-circle li').each(function(i,obj){
		$(obj).click(function(){
			$('.banner-imgs img').hide();
			$('.content-1-circle li').css('background','rgba(0, 0, 0, 0.4)');
			bnnum=$(this).index();
			$('.banner-imgs img').eq(bnnum).fadeIn();
			$('.content-1-circle li').eq(bnnum).css('background','#fff');
			bnnum++;
		})
	})

	//搜索框下拉
	$('.search-right input').focus(function(){
		$('.search-xiala').show();
		$('.mainbov-right').css('border','1px solid #ff6700');
		$('.search-right').css('border-right','1px solid #ff6700');
		$('.top-input-left,.top-input-right').hide();
	})
	$('.search-right input').blur(function(){
		$('.search-xiala').hide();
		$('.mainbov-right').css('border','1px solid #ccc');
		$('.search-right').css('border-right','1px solid #ccc');
		$('.top-input-left,.top-input-right').show();
	})
	$('.mainbov-right').hover(function(){
		if($('.search-xiala').css('display')=='none'){
			$('.mainbov-right').css('border','1px solid #333')
			$('.search-right').css('border-right','1px solid #333')
		}else{
			return;
		}
	},function(){
		if($('.search-xiala').css('display')=='none'){
			$('.mainbov-right').css('border','1px solid #ccc')
			$('.search-right').css('border-right','1px solid #ccc')
		}else{
			return;
		}
	})

	//banner右侧二级菜单
	$('.content-1-left>ul>li').hover(function(){
		$(this).children('.side-hidden').show();
	},function(){
		$(this).children('.side-hidden').hide();
	})

	//明星单品轮播
	function star(){
		var starleft=$('.star-content>ul').position().left;
		if(starleft==0){
			$('.star-content>ul').animate({left:-1240});
			$('.zhineng-jiantou').eq(0).css('color','#e0e0e0');
			$('.zhineng-jiantou').eq(1).css('color','#333');
		}else{
			$('.star-content>ul').animate({left:0});
			$('.zhineng-jiantou').eq(1).css('color','#e0e0e0');
			$('.zhineng-jiantou').eq(0).css('color','#333');
		}
	}
	var t2=setInterval(star,5000);
	$('.zhineng-jiantou').eq(0).click(function(){
		var starleft=$('.star-content>ul').position().left;
		if(starleft==0){
			star();
		}else{
			return;
		}
	})
	$('.zhineng-jiantou').eq(1).click(function(){
		var starleft=$('.star-content>ul').position().left;
		if(starleft==-1240){
			star();
		}else{
			return;
		}
	})
	$('.zhineng-jiantou').hover(function(){
		clearInterval(t2);
	},function(){
		t2=setInterval(star,5000);
	})

	//选项卡
	$('.xxbtn').hover(function(){
		var xxnum=$(this).index();
		$('.xuanxiang').css('display','none');
		$('.xxbtn a').css({color:'#424242',borderBottom:'none'});
		$('.xxbtn a').eq(xxnum).css({color:'#ff6700',borderBottom:'2px solid #FF6700'});
		$('.xuanxiang').eq(xxnum).css('display','block');
	})
	$('.xxbtn1').hover(function(){
		var xxnum=$(this).index();
		$('.xuanxiang1').css('display','none');
		$('.xxbtn1 a').css({color:'#424242',borderBottom:'none'});
		$('.xxbtn1 a').eq(xxnum).css({color:'#ff6700',borderBottom:'2px solid #FF6700'});
		$('.xuanxiang1').eq(xxnum).css('display','block');
	})
	$('.xxbtn2').hover(function(){
		var xxnum=$(this).index();
		$('.xuanxiang2').css('display','none');
		$('.xxbtn2 a').css({color:'#424242',borderBottom:'none'});
		$('.xxbtn2 a').eq(xxnum).css({color:'#ff6700',borderBottom:'2px solid #FF6700'});
		$('.xuanxiang2').eq(xxnum).css('display','block');
	})

	//为你推荐
	function tuijian(){
		var starleft=$('.tuijian-content>ul').position().left;
		if(starleft==0){
			$('.tuijian-content>ul').animate({left:-1240});
			$('.tuijian-jiantou').eq(0).css('color','#e0e0e0');
			$('.tuijian-jiantou').eq(1).css('color','#333');
		}else{
			$('.tuijian-content>ul').animate({left:0});
			$('.tuijian-jiantou').eq(1).css('color','#e0e0e0');
			$('.tuijian-jiantou').eq(0).css('color','#333');
		}
	}
	$('.tuijian-jiantou').eq(0).click(function(){
		var starleft=$('.tuijian-content>ul').position().left;
		if(starleft==0){
			tuijian();
		}else{
			return;
		}
	})
	$('.tuijian-jiantou').eq(1).click(function(){
		var starleft=$('.tuijian-content>ul').position().left;
		if(starleft==-1240){
			tuijian();
		}else{
			return;
		}
	})

	//内容选项卡
	$('.neirong-con').hover(function(){
		$(this).children('.neirong-jiantouleft,.neirong-jiantouright').css('display','block')
	},function(){
		$(this).children('.neirong-jiantouleft,.neirong-jiantouright').css('display','none')
	})
	$('.neirong-jiantouleft,.neirong-jiantouright').hover(function(){
		$(this).css('background','rgba(66, 66, 66, 0.6)')
	},function(){
		$(this).css('background','rgba(66, 66, 66, 0.3)')
	})
	var tsnum=0;
	var ztnum=0;
	var yxnum=0;
	var yynum=0;
	$('.ts-right').click(function(){
		if(tsnum<=2){
			$('.ts-dian li').css({border:'2px solid #fff',background:'#ccc'})
			tsnum++;
			$('.ts-con').css('left',-219*tsnum)
			$('.ts-dian li').eq(tsnum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.ts-left').click(function(){
		var ow=$('.ts-con').position().left;
		var index=ow/-219
		if(index>=1){
			$('.ts-dian li').css({border:'2px solid #fff',background:'#ccc'})
			tsnum=index-1;
			$('.ts-con').css('left',-219*(index-1))
			$('.ts-dian li').eq(tsnum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.ts-dian li').click(function(){
		var index=$(this).index();
		tsnum=index;
		$('.ts-dian li').css({border:'2px solid #fff',background:'#ccc'})
		$('.ts-con').css('left',-219*index)
		$('.ts-dian li').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
	})


	$('.zt-right').click(function(){
		if(ztnum<=2){
			$('.zt-dian li').css({border:'2px solid #fff',background:'#ccc'})
			ztnum++;
			$('.zt-con').css('left',-219*ztnum)
			$('.zt-dian li').eq(ztnum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.zt-left').click(function(){
		var ow=$('.zt-con').position().left;
		var index=ow/-219
		if(index>=1){
			$('.zt-dian li').css({border:'2px solid #fff',background:'#ccc'})
			ztnum=index-1;
			$('.zt-con').css('left',-219*(index-1))
			$('.zt-dian li').eq(ztnum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.zt-dian li').click(function(){
		var index=$(this).index();
		ztnum=index;
		$('.zt-dian li').css({border:'2px solid #fff',background:'#ccc'})
		$('.zt-con').css('left',-219*index)
		$('.zt-dian li').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
	})

	$('.yx-right').click(function(){
		if(yxnum<=2){
			$('.yx-dian li').css({border:'2px solid #fff',background:'#ccc'})
			yxnum++;
			$('.yx-con').css('left',-219*yxnum)
			$('.yx-dian li').eq(yxnum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.yx-left').click(function(){
		var ow=$('.yx-con').position().left;
		var index=ow/-219
		if(index>=1){
			$('.yx-dian li').css({border:'2px solid #fff',background:'#ccc'})
			yxnum=index-1;
			$('.yx-con').css('left',-219*(index-1))
			$('.yx-dian li').eq(yxnum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.yx-dian li').click(function(){
		var index=$(this).index();
		yxnum=index;
		$('.yx-dian li').css({border:'2px solid #fff',background:'#ccc'})
		$('.yx-con').css('left',-219*index)
		$('.yx-dian li').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
	})

	$('.yy-right').click(function(){
		if(yynum<=2){
			$('.yy-dian li').css({border:'2px solid #fff',background:'#ccc'})
			yynum++;
			$('.yy-con').css('left',-219*yynum)
			$('.yy-dian li').eq(yynum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.yy-left').click(function(){
		var ow=$('.yy-con').position().left;
		var index=ow/-219
		if(index>=1){
			$('.yy-dian li').css({border:'2px solid #fff',background:'#ccc'})
			yynum=index-1;
			$('.yy-con').css('left',-219*(index-1))
			$('.yy-dian li').eq(yynum).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
		}else{
			return;
		}
	})
	$('.yy-dian li').click(function(){
		var index=$(this).index();
		yynum=index;
		$('.yy-dian li').css({border:'2px solid #fff',background:'#ccc'})
		$('.yy-con').css('left',-219*index)
		$('.yy-dian li').eq(index).css({background:'#fff',border:'2px solid #ff6700',borderRadius:'50%'})
	})

	//视频hover
	$('.shipin-btn').hover(function(){
		$(this).children('span').css('background','#ff6700');
	},function(){
		$(this).children('span').css('background','#757575');
	})
})