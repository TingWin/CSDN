var blogList = new Vue({
			el: "#main",
			data: {
				list:[],
			},
			mounted: function(){
				this.getList();
			},
			methods: {
				getList: function(){
					var that = this;
					$.ajax({
						url: "http://blog.com/api/blog/myBlog",
						data: {
							user_id: window.localStorage.user_id,
						},
						type:"post",
						dataType: "json",
						success: function(res){
							if(res.error_code == 0){
								that.list = res.data.my_blog_lists
							}else {
								alert(res.message);
							}
						}
					})
				},
				deleteBlog: function(item){
					var that = this;
					$.ajax({
						url: "http://blog.com/api/blog/del",
						data: {
							"user_id": window.localStorage.user_id,
							"blog_id": item.id
						},
						type:"post",
						dataType: "json",
						success: function(res){
							if(res.error_code == 0){
								alert("删除成功");
								that.list.forEach(function(i,index){
									if(item == i){
										that.list.splice(index,1)
									}
								})
							}else {
								alert(res.message);
							}
						}
					})
				}
				
			}
		})