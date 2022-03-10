import blog from '@/api/blog.js'

export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page: 1
        }
    },

    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getIndexBlogs({ page: this.page }).then(res => {
            console.log('blog', res);
            this.blogs = res.resource
            this.total = res.total
            this.page = res.page
            console.log('this.blogs', this.blogs);
        })
    },

    methods: {
        onPageChange(newPage) {
            blog.getIndexBlogs({ page: newPage }).then(res => {
                this.blogs = res.resource
                this.total = res.total
                this.page = res.page
                this.$router.push({ path: '/', query: { page: newPage } })
            })
        }
    }
}