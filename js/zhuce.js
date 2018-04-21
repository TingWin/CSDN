var newAjax = new Vue({
	el:"#main",
	data:{
		list:[],
	},
	mounted: function(){
		
	},
	methods: {
		login: function(){
			var that = this;
			that.phone = $(".number").val();
        	that.password = $(".password").val();
        	that.username = $(".username").val();
        	var dataLogin={
        		'phone':that.phone,
        		'password':that.password,
        		'uname': that.username,
        		'format':"json",
        	}
			$.ajax({
				url:"http://blog.com/api/user/doReg",
				type:"post",
				dataType: "json", 
				data:dataLogin,
				success: function(res){
					if(res.error_code == 0){
						alert("注册成功！")
						localStorage.setItem("user_id",res.data.user_id);
						localStorage.setItem("password",res.data.password);
						localStorage.setItem("author_name",res.data.author_name);
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
