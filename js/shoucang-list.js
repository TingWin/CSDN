var vmAjax = new Vue({
	el: "#main",
	data: {
		list: [],
	},
	mounted: function(){
		this.getList();
	},
	methods: {
		getList: function(){
			var that = this;
			$.ajax({
				url: "http://blog.com/api/collect/lists",
				dataType: "json",
				type: "post",
				data: {
					user_id: window.localStorage.user_id,
				},
				success: function(res){
					that.list = res.data.blog_lists;
				},
				error: function(res){

				}
			})
		}
	}
})