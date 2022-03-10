import request from '../helpers/request.js'

const URL = {
    GET_LIST: '/blogs',
    GET_DETAIL: '/blogs/:blogId',
    CREATE: '/blogs',
    UPDATE: '/blogs/:blogId',
    DELETE: '/blogs/:blogId',
}

export default {
    getBlogs({ page = 1, userId, at_index } = { page: 1 }) {
        return request(URL.GET_LIST, 'GET', { page, userId, at_index })
    },

    getIndexBlogs({ page = 1 } = { page: 1 }) {
        return this.getBlogs({ page, at_index: true })
    },

    getBlogsByUserId(userId, { page = 1, at_index } = { page: 1 }) {
        return this.getBlogs({ userId, page, at_index })
    },

    getDetail({ blogId }) {
        return request(URL.GET_DETAIL.replace(':blogId', blogId))
    },

    updateBlog({ blogId }, { title, content, description, at_index }) {
        return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, at_index })
    },

    deleteBlog({ blogId }) {
        return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
    },

    createBlog({ title = '', content = '', description = '', at_index = false } = { title: '', content: '', description: '', at_index: false }) {
        return request(URL.CREATE, 'POST', { title, content, description, at_index })
    }
}