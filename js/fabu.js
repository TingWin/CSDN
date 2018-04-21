var vmAjax = new Vue({
	el: "#main",
	data: {
		title: "",
		class_id: "",
		infoList: [],
	},
	mounted: function(){
		var ue = UE.getEditor('container');
		this.changeBlog();
	},
	methods: {
		getUeditorContent: function(){
    		return UE.getEditor('container').getContent()
		},
		issue: function(){
			$.ajax({
				url: "http://blog.com/api/blog/doAdd",
				type: "post",
				dataType: "json",
				data: {
					"user_id": "77",
    				"title": this.title,
    				"content": this.getUeditorContent(),
    				"classify_id": this.class_id,
				},
				success: function(res){
					if (res.error_code == 0) {
						alert("发布成功");
    					window.location.href="./myblog.html"
					};
				},
				error: function(res){
					alert(res.message)
				}
			})

		},
		changeBlog: function(item){
			var that = this;
			$.ajax({
				url: "http://blog.com/api/blog/add",
				type: "get",
				dataType: "json",
				data: {
					user_id: window.localStorage.user_id,
					blog_id: window.location.search.split("=")[1],
				},
				success: function(res){
					if (res.error_code == 0) {
    					that.infoList = res.data.my_blog_info;
    					that.title=res.data.my_blog_info.title;
					};
				},
				error: function(res){

				}
			})
		},
		edit: function(){
			var that = this;
			$.ajax({
				url: "http://blog.com/api/blog/doEdit",
				type: "post",
				data: {
					"user_id": window.localStorage.user_id,
					"blog_id": window.location.search.split("=")[1],
					"title": that.title,
					"content": that.getUeditorContent(),
					"classify_id": that.class_id,
				},
				dataType: "json",
				success: function(res){
					if (res.error_code == 0) {
						alert("编辑成功即将跳转...")
						window.location.href="./myblog.html"
					}else{
						alert(res.message);
					};
				},
				error: function(res){

				}
			})
		}
	}
})

