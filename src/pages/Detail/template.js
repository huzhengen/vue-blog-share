import marked from 'marked'
import blog from '@/api/blog.js'

export default {
    data() {
        return {
            title: '',
            rawContent: '',
            user: {},
            createdAt: new Date(),
            blogId: '',
        }
    },
    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail({ blogId: this.blogId }).then(res => {
            this.title = res.resource.title
            this.rawContent = res.resource.content
            this.createdAt = res.resource.created_at
            this.user = res.resource.user
        })
    },
    computed: {
        markdown() {
            return marked(this.rawContent)
        }
    }
};