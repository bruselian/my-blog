import ShowBlogs from './../src/components/ShowBlogs.vue'
import AddBlog from './../src/components/AddBlog.vue'
import EditBlog from './../src/components/EditBlog.vue'
import SingleBlog from './../src/components/SingleBlog'

export default[
	{path: "/", component: ShowBlogs},
	{path: "/add", component: AddBlog},
	{path: "/edit/:id", component: EditBlog},
	{path: "/blog/:id", component: SingleBlog},
];