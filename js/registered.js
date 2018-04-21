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
			that.phone = $(".user-name").val();
        	that.password = $(".password").val();
        	var dataLogin={
        		'phone':that.phone,
        		'password':that.password,
        		'format':"json",
        	}
        	var blogId = window.location.blog_id;
			$.ajax({
				url:"http://blog.com/api/user/doLogin",
				type:"post",
				dataType: "json", 
				data:dataLogin,
				success: function(res){
					if(res.error_code == 0){
						alert("登录成功！") 
           				window.history.back(-1);
           				localStorage.setItem("user_id",res.data.user.userid);
           				localStorage.setItem("user_image",res.data.user.userimg);
           				localStorage.setItem("user_name",res.data.user.username);
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
