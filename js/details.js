var newAjax = new Vue({
	el:"#main",
	data: {
		list: {},
		readList: [],
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var that = this;
			var blogId = window.location.search.split("=")[1]; //文章id
        	var userId = window.localStorage.user_id;  //用户id
			$.ajax({
				url:"http://blog.com/api/blog/info",
				type:"get",
				data:{
					id:window.location.search.split("=")[1],
        			user_id:userId,
				},
				dataType: "json",
				success: function(res){
					that.list=res.data.blog_info;
					that.readtList=res.data.related_blog;
					if(res.data.blog_info.collect_status == 0){
						
					}else if(res.data.blog_info.collect_status == 1){
						that.$refs.add.innerHTML="已收藏";
					}else{
						alert("用户没登录")
						window.location.href="./registered.html";
					}	
				},
				error:function(res){

				}
			})
		},
		add: function(){
			var that = this;
			var blogId = window.location.search.split("=")[1];
			var userId = window.localStorage.user_id;
			$.ajax({
				url:"http://blog.com/api/collect/add",
				type:"post",
				data:{
					user_id:userId,
					blog_id:blogId,
				},
				dataType:"json",
				success: function(res){
					if (res.error_code == 0) {
						that.$refs.add.innerHTML="已收藏";
					}else{
						that.$refs.add.innerHTML="收藏";
					};
				},
				error: function(res){

				}
			})
		},
	}
});
