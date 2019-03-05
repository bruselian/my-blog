<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<p>作者：{{blog.author}} --- 时间：{{blog.time | formatDate}}</p>
		<article>{{blog.content}}</article>
		<button v-on:click="delblog">删除</button>
	</div>	
</template>

<script type="text/javascript">
	export default{
		name: "single-blog",
		data(){
			return {
				id: this.$route.params.id,
				blog: {
					title: '',
					content: '',
					author: '',
					time: '',
				},
			}
		},
		created(){
			var url = "/admin/Blog/getBlog?id=" + this.id;
			this.$http.get(url).then((result)=>{
				console.log(result);
				this.blog = result.body;
			})
		},

		filters: {//时间格式化
			formatDate: function(time) {
				return new Date(parseInt(time) * 1000).toLocaleString().substr(0,17);
			}
		},

		methods: {
			delblog: function(id){
				var url = "/admin/Blog/delete?id=" + this.id;
				this.$http.delete(url).then((result) => {
					console.log(result);
					if (result.body.status){
						alert('删除成功');
					}else{
						alert('删除失败');
					}
				})
			}
		}
	}
</script>

<style type="text/css">
#single-blog{
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background: #eee;
	border: 1px dotted #aaa;
}	

p{
	font-size: 14px;
	color: red;
}

button{
	border: 1px #ccc solid;
	margin: 20px 0;
	padding: 10px;
	text-align: center;
}
</style>