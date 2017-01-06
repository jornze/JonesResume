var sliderWidget=function(option){
	this.option={
		obj:$("ul"),
		objchild:$("li"),
		objicon:$(".sliderIcon span"),
		effects:"left"
	}
	this.option=$.extend(this.option,option);
	this.init();
}
sliderWidget.prototype={
	init:function(){
		this.auto();
		this.iconclick();
	},
	auto:function(){
		var _self=this,i=0,timeInterval=null,
			liWidth=_self.option.objchild.width(),
			lilength=_self.option.objchild.length;
			_self.option.obj.width(lilength*liWidth);
			_self.option.objchild.css("width",liWidth+"px");
			timeInterval=window.setInterval(function(){
				i++;
				if(i>=lilength){
					i=0;
				}
				_self.mover(_self,i*liWidth);
			},5000);
	},
	mover:function(o,w){
		o.option.obj.animate({
					marginLeft:"-"+w+"px"
				})
	},
	iconclick:function(){ 
		var _this=this,liWidth=_this.option.objchild.width();
		this.option.objicon.on('hover',function(){
			var _index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			_this.mover(_this,_index*liWidth);
		})
	}
}

