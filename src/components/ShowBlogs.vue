<template>
  <div id="show-blogs" v-theme:backcolor="'wide'">
      <h1>{{msg}}</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div class="single-blog" v-for="blog in filteredBlogs">
        <router-link v-bind:to="/blog/ + blog.id">
          <h2 v-titlecolor>{{ blog.title }}</h2>
        </router-link>   
        <article>{{ blog.content | snippet }}</article>
        <p>作者：{{blog.author}} &nbsp;&nbsp;&nbsp;&nbsp; 时间：{{blog.time | formatDate}} &nbsp;&nbsp;&nbsp;&nbsp; 
          <router-link v-bind:to="/edit/ + blog.id">编辑</router-link>
          <button v-on:click="delblog(blog.id)">删除</button>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      msg: "博客总览",
      blogs: [],
      search: "", 
    }
  },
  created(){//获取数据
    var url = '/admin/Blog/showBlogs';
    this.$axios.get(url).then((response)=>{
      console.log(response);
      this.blogs = response.data;
    });
  },
  computed:{
    filteredBlogs: function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  },
  
  methods: {
    delblog: function(id){
        var url = "/admin/Blog/delete?id=" + id;
        this.$http.delete(url).then((result) => {
          console.log(result);
          if (result.body.status){
            alert('删除成功');
          }else{
            alert('删除失败');
          }
        })
      }, 
  }
}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration-style: none;
  border-radius: 4px;
  text-decoration:none
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
}

p{
  font-size: 12px;
  color: red;
}
p button{
  font-size: 12px;
  border: 1px #ccc solid;
  margin: 20px 0;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}

p a{
  font-size: 12px;
  color: #000000;
  border: 1px #ccc solid;
  margin: 20px 0;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}

</style>
