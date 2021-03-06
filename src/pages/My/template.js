import blog from '@/api/blog.js'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0,
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(this.user.id, { page: this.page }).then(res => {
            this.blogs = res.resource
            this.page = res.page
            this.total = res.total
        })
    },
    methods: {
        splitDate(dateStr) {
            let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        },
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
                this.blogs = res.resource
                this.page = res.page
                this.total = res.total
                this.$router.push({ path: `/my`, query: { page: newPage } })
            })
        },
        // onDelete(blogId) {
        //     this.$confirm('即将删除该博客, 是否继续?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     }).then(() => {
        //         return blog.deleteBlog({ blogId })
        //     }).then(
        //         this.$message.success('删除成功!')
        //     )
        // },
        async onDelete(blogId) {
            await this.$confirm('即将删除该博客, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            await blog.deleteBlog({ blogId })
            this.$message.success('删除成功!')
            this.blogs = this.blogs.filter(blog => blog.id !== blogId)
        },
    }
};