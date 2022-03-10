import blog from '@/api/blog.js'

export default {
    data() {
        return {
            blogId: null,
            title: '',
            description: '',
            content: '',
            at_index: false,
        }
    },
    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail({ blogId: this.blogId }).then(res => {
            this.title = res.resource.title
            this.description = res.resource.description
            this.content = res.resource.content
            this.at_index = res.resource.at_index
        })
    },
    methods: {
        onEdit() {
            blog.updateBlog({ blogId: this.blogId }, { title: this.title, description: this.description, content: this.content, at_index: this.at_index }).then(res => {
                this.$message.success(res.msg)
                this.$router.push({ path: `/detail/${res.resource.id}` })
            })
        }
    }
};