import request from '../helpers/request.js'

const URL = {
    REGISTER: '/users/',
    LOGIN: '/sessions/',
    LOGOUT: '/sessions/',
    GET_INFO: '/me'
}

export default {
    register({ email, password, password_confirmation }) {
        return request(URL.REGISTER, 'POST', { email, password, password_confirmation })
    },

    login({ email, password }) {
        return request(URL.LOGIN, 'POST', { email, password })
    },

    logout() {
        return request(URL.LOGOUT, 'DELETE')
    },

    getInfo() {
        return request(URL.GET_INFO)
    }
}