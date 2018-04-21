var newAjax = new Vue({
	el:"#main",
	data:{
		list:[],
	},
	mounted: function(){
		
	},
	methods: {
		denglu: function(){
			var that = this;
			that.phone = $(".number").val();
        	that.password = $(".password").val();
        	var dataLogin={
        		'phone':that.phone,
        		'password':that.password,
        		'format':"json",
        	}
			$.ajax({
				url:"http://blog.com/api/user/doLogin",
				type:"post",
				dataType: "json", 
				data:dataLogin,
				success: function(res){
					if(res.error_code == 0){
						alert("登录成功")
					}else{
						alert("message")
					};
					
				},
				error:function(res){

				}
			})
		}
	}
})
