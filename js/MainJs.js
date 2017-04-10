$(document).ready(function(){
	
	$('.quxiao').on('click',function(){
		
		$('input[type="text"]').val('');
		$('input[type="number"]').val('');
		$('input[type="date"]').val('');
	})
	$('.tijiao').on('click',function(){
		
		$('input[type="text"]').val('');
		$('input[type="number"]').val('');
		$('input[type="date"]').val('');
	})
	
	
	/*改这里*/
	IndexLeftClick()
	function  IndexLeftClick(){
		$('.IndexLeftList').delegate('li','click',function(){
			
			$(this).children().last().toggle();
			$('.IndexLeftList li').children().first().find('p').css('border-color','#a9aeb1');
			$(this).children().first().find('p').css('border-color','#95979e');
			
		})
		
		$('.click-test').delegate('p','click',function(){
			
			$(this).css('color','#95979e').siblings('p').css('color','');
			return false;
		})
	}
	/*改这里*/
	/*--头像开始---*/
	// MytouxiangClick()；
	// function  MytouxiangClick(){
	// 	$('.touxiang').delegate('div','click',function(){
	// 		$(this).children().last().toggle();
	// 		$('.touxiang a').children().first().find('');
	// 	})


	// }


	/*--头像结束---*/
	Planned_checked()
	function Planned_checked(){
		
		$('input[name="Planned_choose"]').on('click',function(){
			
		
				
			$(this).parent('span').css('background','url(img/yuan-cheaked.png)').css('background-size','cover').siblings('span').css('background','url(img/yuan-uncheaked.png)').css('background-size','cover');
			$('.Planned_mode1content').hide();
			$('.Planned_mode1content').eq($(this).parent('span').index()-1).show();
		
			
		})
		
		$('.Planned_Check').on('click',function(){
			
			if($(this).prop('checked')){
				
				
				$(this).parent('span').css('background','url(img/cheaked-yellow.png)').css('background-size','cover');
				$(this).closest('a').css('border','2px solid green')
			}
			else{
				
				$(this).parent('span').css('background','url(img/uncheaked-yellow.png)').css('background-size','cover');
				$(this).closest('a').css('border','')
			}
			
		})
		
		
		
	}
	
	Product_terms_Btn_Click()
	function Product_terms_Btn_Click(){
		$('.Product_terms_Btn').on('click',function(){
			
			var Product_terms_Btn_Content=$('<div>').css('width','1000px').css('margin-left','108px')/*.css('border','1px solid black')*/.css('position','relative').css('margin-top','20px');
			var Product_terms_Btn_Content_text=$('<input>').css('display','block').attr('type','text').appendTo(Product_terms_Btn_Content);
			var Product_terms_Btn_Content_textarea=$('<textarea>').css('resize','none').css('width','850px').css('height','100px').css('background','#fcfcfc').css('border','1px solid #e6e6e6').css('margin-top','10px').appendTo(Product_terms_Btn_Content);
			var Close_Product_terms_Btn_Content=$('<span>').css('display','inline-block').css('width','30px').css('height','30px').css('position','absolute').css('left','0').css('top','0').css('margin-left','-40px').css('background','url(img/bin.png)').css('cursor','pointer').appendTo(Product_terms_Btn_Content);
			Product_terms_Btn_Content.appendTo($('.Product_terms_Content'));
			
			Close_Product_terms_Btn_Content.on('click',function(){
				
				Product_terms_Btn_Content.remove();
				
			})
			
			
		})
		
		
	}
	
	
	Notice_insurance_Btn_Click()
	function Notice_insurance_Btn_Click(){
		$('.Notice_insurance_Btn').on('click',function(){
			
			var Notice_insurance_Btn_Content=$('<div>').css('width','1000px').css('margin-left','108px')/*.css('border','1px solid black')*/.css('position','relative').css('margin-top','20px');
			var Notice_insurance_Btn_Content_text=$('<input>').attr('type','text').css('display','block').appendTo(Notice_insurance_Btn_Content);
			var Notice_insurance_Btn_Content_textarea=$('<textarea>').css('resize','none').css('width','850px').css('height','100px').css('background','#fcfcfc').css('border','1px solid #e6e6e6').css('margin-top','10px').appendTo(Notice_insurance_Btn_Content);
			var Close_Notice_insurance_Btn_Content=$('<span>').css('display','inline-block').css('width','30px').css('height','30px').css('position','absolute').css('left','0').css('top','0').css('margin-left','-40px').css('background','url(img/bin.png)').css('cursor','pointer').appendTo(Notice_insurance_Btn_Content);
			Notice_insurance_Btn_Content.appendTo($('.Notice_insurance_Content'));
			
			Close_Notice_insurance_Btn_Content.on('click',function(){
				
				Notice_insurance_Btn_Content.remove();
				
			})
			
			
		})
		
		
	}
	
	ChooseCard()
	function ChooseCard(){
		
		$('.product li').on('click',function(){
			
			
			$(this).css('color','red').siblings().css('color','');
			console.log($(this).index()*$(this).width()+190);
			$('.sanjiao').css('left',''+($(this).index()*$(this).width()+190)+'px');
			$('.CONTENT').hide();
			$('.CONTENT').eq($(this).index()).show();
		})
		
		
		
		
	}
	MerchandiseControlMackShow()
	function MerchandiseControlMackShow(){     //   新建
		$('.xin_jian').on('click',function(){
			$('.MerchandiseControlMack').show();
			$('.MerchandiseControlMackAddDig').show();
			$('.MerchandiseControlMackAddDigContent').css('width',''+$('.MerchandiseControlMackAddDigContent li').length*230+'px');
			
			$('.CloseAdd').on('click',function(){   //  关闭新建页面按钮
				
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackAddDig').hide();
				$(this).closest('.MerchandiseControlMackAddDig').find('input').val('');
				
				
			})
			$('.SaveAdd').on('click',function(){    //  保存新建页面按钮
				
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackAddDig').hide();
				$(this).closest('.MerchandiseControlMackAddDig').find('input').val('');
			})
			
		})
		
		$('.Edit').on('click',function(){    //修改
			$('.MerchandiseControlMack').show();
			$('.MerchandiseControlMackEditDig').show();
			$('.MerchandiseControlMackEditDigContent').css('width',''+$('.MerchandiseControlMackEditDigContent li').length*230+'px');
			$('.CloseEdit').on('click',function(){   //  关闭修改页面
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackEditDig').hide();
				$(this).closest('.MerchandiseControlMackEditDig').find('input').val('');

			})
			
			$('.SaveEdit').on('click',function(){    //  保存修改页面
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackEditDig').hide();
				$(this).closest('.MerchandiseControlMackEditDig').find('input').val('');

			})
			
			
			
		})
		
		$('.Cheak').on('click',function(){    //查看
			
			$('.MerchandiseControlMack').show();
			$('.MerchandiseControlMackCheakDig').show();
			$('.MerchandiseControlMackCheakDig').find('input').attr('disabled','disabled').css('border','none');
			$('.MerchandiseControlMackCheakDigContent').css('width',''+$('.MerchandiseControlMackCheakDigContent li').length*230+'px');
			$('.CloseCheak').on('click',function(){     //  查看这条数据；
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackCheakDig').hide();
				$(this).closest('.MerchandiseControlMackCheakDig').find('input').val('');

			})
			
			
			
			
		})
		$('.Money').on('click',function(){     //  查看返佣  
			$('.MerchandiseControlMack').show(); 
			$('.MerchandiseControlMackMoneyDig').show();
			var MerchandiseControlMackMoneyDigTitle_data=['趸交','5年交','10年交','15年交','20年交','25年交'];
			for(i=0;i<MerchandiseControlMackMoneyDigTitle_data.length;i++){
				var Abtn=$('<a>').html(MerchandiseControlMackMoneyDigTitle_data[i]).css('width',''+100/MerchandiseControlMackMoneyDigTitle_data.length+'%').appendTo('.MerchandiseControlMackMoneyDigTitle span')
				var Acon=$('<div>').attr('class','MerchandiseControlMackMoneyDigContent').css('display','none');
				var Aul=$('<ul>').attr('class','clear').appendTo(Acon);
				var Aul_li1=$('<li>').html('返佣周期').appendTo(Aul);
				var Aul_li2=$('<li>').html('费率').appendTo(Aul);
				var Aul_li3=$('<li>').html('<span class="XinjianFY"></span> 新增返佣').appendTo(Aul);
				Acon.appendTo('.MerchandiseControlMackMoneyDig');
			}
			$('.MerchandiseControlMackMoneyDigTitle>span>a').eq(0).attr('class','active');
			$('.MerchandiseControlMackMoneyDigContent').eq(0).css('display','block');
			$('.MerchandiseControlMackMoneyDigTitle>span>a').on('click',function(){   //  选项卡
				
				$(this).attr('class','active').siblings('a').attr('class','');
				$('.MerchandiseControlMackMoneyDigContent').eq($(this).index()).show().siblings('.MerchandiseControlMackMoneyDigContent').hide();
				
			})
			
			
			
			
			$('.CloseDig').on('click',function(){
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackMoneyDig').hide();

			})
			$('.XinjianFY').on('click',function(){    //添加返佣弹窗
				
				$('.MerchandiseControlFYMack').show();
				$('.MerchandiseControlFYMackAddDig').show();
				
				
			})
			$('.EditFY').on('click',function(){      //查看返佣弹窗
				$('.MerchandiseControlFYMack').show();
				$('.MerchandiseControlFYMackCheakDig').show();
				
				
			})
			
			$('.DeleteFY').on('click',function(){    //删除页面返佣数据
				
				alert('删除这条返佣数据');
			})
			
			
		})
		$('.DeleteFYDig').on('click',function(){    //  删除弹窗
			
			
			$('.MerchandiseControlFYMack').hide();
			$('.MerchandiseControlFYMackAddDig').hide();
			$(this).closest('.MerchandiseControlFYMackAddDig').find('input').val(' ');
			$('.MerchandiseControlFYMackCheakDig').hide();
			$(this).closest('.MerchandiseControlFYMackCheakDig').find('input').val(' ');
			
			
		});
		$('.SaveFY').on('click',function(){    //  保存弹窗
			
			$('.MerchandiseControlFYMack').hide();
			$('.MerchandiseControlFYMackAddDig').hide();
			$(this).closest('.MerchandiseControlFYMackAddDig').find('input').val(' ');
			$('.MerchandiseControlFYMackCheakDig').hide();
			$(this).closest('.MerchandiseControlFYMackCheakDig').find('input').val(' ');
			iConShow() ;  //   使新增加的ul也具有隐藏icon的功能
			
		});
		
		
		$('.Money_1').on('click',function(){     //  查看返佣 _1
			$('.MerchandiseControlMack').show(); 
			$('.MerchandiseControlMackMoneyDig_1').show();
			var MerchandiseControlMackMoneyDigTitle_data=['趸交','5年交','10年交','15年交','20年交','25年交'];
			for(i=0;i<MerchandiseControlMackMoneyDigTitle_data.length;i++){
				var Abtn=$('<a>').html(MerchandiseControlMackMoneyDigTitle_data[i]).css('width',''+100/MerchandiseControlMackMoneyDigTitle_data.length+'%').appendTo('.MerchandiseControlMackMoneyDigTitle_1 span')
				var Acon=$('<div>').attr('class','MerchandiseControlMackMoneyDigContent_1').css('display','none');
				var Aul=$('<ul>').attr('class','clear').appendTo(Acon);
				var Aul_li1=$('<li>').html('返佣周期').appendTo(Aul);
				var Aul_li2=$('<li>').html('费率').appendTo(Aul);
				var Aul_li3=$('<li>').html('奖励').appendTo(Aul);
				var Aul_li4=$('<li>').html('<span class="XinjianFY_1"></span>新增返佣').appendTo(Aul);
				Acon.appendTo('.MerchandiseControlMackMoneyDig_1');
			}
			
			$('.MerchandiseControlMackMoneyDigTitle_1>span>a').eq(0).attr('class','active');
			$('.MerchandiseControlMackMoneyDigContent_1').eq(0).css('display','block');
			
			
			$('.MerchandiseControlMackMoneyDigTitle_1>span>a').on('click',function(){   //  选项卡
				
				$(this).attr('class','active').siblings('a').attr('class','');
				$('.MerchandiseControlMackMoneyDigContent_1').eq($(this).index()).show().siblings('.MerchandiseControlMackMoneyDigContent_1').hide();
				
			})
			
			
			
			
			$('.CloseDig_1').on('click',function(){
				$('.MerchandiseControlMack').hide();
				$(this).closest('.MerchandiseControlMackMoneyDig_1').hide();

			})
			$('.XinjianFY_1').on('click',function(){    //添加返佣弹窗
				
				$('.MerchandiseControlFYMack').show();
				$('.MerchandiseControlFYMackAddDig_1').show();
				
				
			})
			$('.EditFY_1').on('click',function(){      //查看返佣弹窗
				$('.MerchandiseControlFYMack').show();
				$('.MerchandiseControlFYMackCheakDig_1').show();
				
				
			})
			
			$('.DeleteFY_1').on('click',function(){    //删除页面返佣数据
				
				alert('删除这条返佣数据');
			})
			
			
		})
		$('.DeleteFYDig_1').on('click',function(){    //  删除弹窗
			
			
			$('.MerchandiseControlFYMack').hide();
			$('.MerchandiseControlFYMackAddDig').hide();
			$(this).closest('.MerchandiseControlFYMackAddDig').find('input').val(' ');
			$('.MerchandiseControlFYMackCheakDig').hide();
			$(this).closest('.MerchandiseControlFYMackCheakDig').find('input').val(' ');
			
			
		});
		$('.SaveFY_1').on('click',function(){    //  保存弹窗
			
			$('.MerchandiseControlFYMack').hide();
			$('.MerchandiseControlFYMackAddDig').hide();
			$(this).closest('.MerchandiseControlFYMackAddDig').find('input').val(' ');
			$('.MerchandiseControlFYMackCheakDig').hide();
			$(this).closest('.MerchandiseControlFYMackCheakDig').find('input').val(' ');
			
			
		});
		
	}
	iConShow()     //   令小图标显示    隐藏
	function iConShow(){
		for(i=1;i<$('.Supplier_Agreement_content ul').length;i++){
			
			$('.Supplier_Agreement_content ul').eq(i).children().last().hide();
			
			
		}
		for(i=0;i<$('.Supplier_Agreement_content_title').length;i++){
				
				$('.Supplier_Agreement_content_title').eq(i).children().last().show(); //  令新建始终显示
			}
		$('.Supplier_Agreement_content').delegate('ul','mouseenter',function(){    //鼠标一如显示
			$(this).children().last().show();
			
			
		})
		$('.Supplier_Agreement_content').delegate('ul','mouseleave',function(){     //鼠标一出隐藏
			$(this).children().last().hide();
			for(i=0;i<$('.Supplier_Agreement_content_title').length;i++){
				
				$('.Supplier_Agreement_content_title').eq(i).children().last().show(); //  令新建始终显示
			}
			
			
			
			
		})
		
		
		
	}
	
})
