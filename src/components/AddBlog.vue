<template>
  <div id="add-blog">
      <h1>{{msg}}</h1>
      <form v-if="!submited">
        <label>标题：</label>
        <input type="text" v-model="blog.title">
        <label>内容：</label>
        <textarea v-model="blog.content"></textarea>
        <div>
          <label>PHP</label>
          <input type="checkbox" value="PHP" v-model="blog.categories">
          <label>JAVA</label>
          <input type="checkbox" value="JAVA" v-model="blog.categories">
          <label>JS</label>
          <input type="checkbox" value="JS" v-model="blog.categories">
          <label>C++</label>
          <input type="checkbox" value="C++" v-model="blog.categories">
        </div>
        <label>作者：</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
        <button v-on:click.prevent="post">添加博客</button>
      </form>

      <hr>
      <div v-if="submited">
        <h3>您的博客发布成功</h3>
      </div>

      <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{ blog.title }}</p>
        <p>博客内容：</p>
        <p>{{ blog.content }}</p>
        <p>博客分类：</p>
        <ul>
          <li v-for="categorie in blog.categories">{{categorie}}</li>
        </ul>
        <p>作者：{{ blog.author }}</p>
      </div>

      <div>
        
      </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'add-blog',
  data () {
    return {
      msg: "添加博客",
      blog:{
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ['bruce','may','lucky','emmit'],
      submited: false,
    }
  },
  methods:{
    post: function () {
      axios.post("/admin/Blog/addBlog",this.blog).then((result)=>{
        console.log(result);
        if (result.data.status){
          this.submited = true;
        }
      })
    }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

lable{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

#chekboxes lable{
  display: inline-block;
  margin-top: 0;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  width: 100%;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

textarea{
  height: 200px;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>
