<template>
  <div id="app">
  <!-- <add-blog></add-blog> -->
  <!-- <show-blogs></show-blogs> -->
  <blog-header></blog-header>
  <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
export default {
  name: 'App',
  components: {
    AddBlog,EditBlog,ShowBlogs,BlogHeader
  }
}
</script>

<style>

</style>
