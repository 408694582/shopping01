$(function(){
	var height = $(window).height();
	$('#fullpage').fullpage({
    	navigation:true,
    
		
//  	回调函数   当前屏的下标
		afterLoad:function( anchorLink , index ){
			//向下图片引入动画；
			$(".down").addClass("downA");
			//点击图片跳转到下一屏；
			$(".down").click(function(){
				$.fn.fullpage.moveSectionDown();	
			});
			if( index == 2){
//				让隐藏的搜索框显示；
				$(".mask02_1").show().animate({"left":405},1300,function(){
					//回调：搜索框里面的文字显示
					$(".wenziSF").animate({"opacity":1},300,function(){
						//回调：显示的搜索框隐藏
						$(".mask02_1").hide();
						//合成的图片显示
						$(".erHeyi").show().animate({"left":622,"bottom":450,"width":140},1000);
						//很多沙发的图片显示
						$(".shafas02").show().animate({"width":441},1000);
//						上面的文字改变透明度实现切换；
						$(".wenzi02_1").animate({"opacity":0},300);
						$(".wenzi02_2").animate({"opacity":1},1000)
					});
				});
			};
		},
		
		onLeave:function(index,nextIndex,direction){
			//当前2屏 滚动到 新屏3上去；
			//第三屏开始
			if (index == 2 && nextIndex == 3){
				//盒子显示
				$(".box02").show();
				//沙发显示；进行动画；回调函数显示其余动画
				$(".shafa02").show().animate({"bottom":-(height-230),"width":207,"left":260},1200,function(){
					//文字透明度显示
					$(".zimu03_2").animate({"opacity":1},600);
//					购物车显示
					$(".shopCar03_2").animate({"opacity":1},600);
//					当前沙发隐藏
					$(this).hide();
//					原位置沙发显示
					$(".Bigshafa03").show();
				});
				//第四屏开始
			}else if (index == 3 && nextIndex == 4){
				//滚到第四屏时让第三屏遮盖层显示；隐藏的第三屏沙发也显示；
				$(".box03").show();
				$(".Ishafa03").show().animate({"bottom":-(height-245),"left":270},1000,function(){
					//动画到第四屏隐藏；
					$(this).hide();
					//原本位置的沙发显示
					$(".Ishafa04").show();
					//大的购物车通过动画实现左右移动，然后消失；
					$(".mask04_1").animate({"left":1400,},3000,'easeInElastic',function(){
						$(this).hide();	
						//显示地址的面板弹出；
						$(".mask04_2").animate({"opacity":1},2000);
//						里面的收货人改变透明度显示；
						$(".shoujr04").animate({"opacity":1},2800);
						//上面的文字发生相应的变化；
						$(".wenzi04_1").animate({"opacity":0},2000);
						$(".wenzi04_2").animate({"opacity":1},2000);
					});
				});
				//第五屏开始
			} else if(index == 4 && nextIndex == 5){
				//让手显示，由下到上移动
				$(".hand05").show().animate({"bottom":0},1500,"easeOutCirc",function(){
					//鼠标显示，实现点击效果
					$(".mouse05_2").show();
					//同时沙发显示做动画之后银行做动画，文字旋转停在最后一帧；
					$(".Ishafa05").show().animate({"bottom":25},1000,"easeOutSine",function(){
						$(".bank05").animate({"bottom":340},1000,"easeOutSine",function(){
							$(".wenzi05").addClass("wenzi05a");
							$(".wenzi05").animate({"bottom":530, "left":190},4000);
						})
					});
				});
				//第六屏开始
			}else if(index == 5 && nextIndex == 6){
				//第五屏的沙发掉到第六屏
				$(".Ishafa05").animate({"bottom":-(height-465), "width":65,"left":"82%"},1500,"easeOutExpo");
				//黄盒子也显示移动到相同位置，
				$(".yellowBox06").show().animate({"left":"40%"},1200,"easeOutExpo",function(){
					//回调：沙发隐藏
					$(".Ishafa05").hide();
					//黄盒子掉下
					$(this).animate({"bottom":15},1100,"easeInCirc",function(){
						//回调：文字弹出，地址也显示出来，
						$(".honorific06").animate({"left":"30%"},3500,"easeOutElastic")
						$(".dizhi06").animate({"opacity":1},500);
						//背景X轴移动实现汽车行驶；
							$('.section06').animate({"background-positionX":"97%"},3500,function(){
								//回调：两个人显示
								$(".towRen06").animate({"width":252,"bottom":113},1000,function(){
//									回调:门打开，客户显示；
									$(".openmen06").animate({"opacity":1},1000,function(){
										$(".oneRen06").show().animate({"width":87,"left":950},1000,function(){
											//回调：收货显示；
											$(".shouhuo06").animate({"opacity":1},1000)
										});
									});
								});
							});
					});
				});
				//第七屏开始
			}else if( index == 6 && nextIndex == 7){
				function time(){
//					改变盒子宽度隐藏星星
					$(".stars07").animate({"width":105},1500,function(){
//						回调:好评显示
						$(".good07").animate({"opacity":1},1000);
					});
				};
//				使用定时器只执行一次；
				setTimeout(time,2000);
				//第八屏开始
			}else if( index == 7 && nextIndex == 8){
				//让向下图片隐藏
				$(".down").fadeOut();
				//求出手到上面的剩余距离；
				var minY = height-$(".hand08").height();
				$(document).mousemove(function(event){
					var event = event || window.event 
					//改变鼠标在手上的位置；
					var x = event.pageX /*- $(".hand08").width()/2*/;
					var y = event.pageY + 10;
					//判断条件：鼠标的Y轴高度  < 页面高度 - 手的高度的差值 
					if(y < minY){
						y = minY;
						$(".hand08").css({"left":x});
					}else{
//						图片跟随鼠标移动
						$(".hand08").css({"left":x,"top":y});
					}
				})
				//经过盒子让动图显示，静图隐藏；
				$(".shopps08").mouseover(function(){
					$(".shopping08").hide();
					$(".shopping08_a").show();
				});
				$(".shopps08").mouseout(function(){
					$(".shopping08_a").hide();
					$(".shopping08").show();
				});
//					重来
				$(".again08").click(function(){
//					点击跳转到第1屏
					$.fn.fullpage.moveTo(1);
//					让他们所有的样式都清空，相当于重新开始
					$("img").attr({"style":""});
					$(".move").attr({"style":""});
				})
			}
		},
    });
})
    