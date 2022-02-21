import auth from '@/api/auth'

const state = {
    user: null,
    isLogin: false,
}

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },

    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    },
}

const actions = {
    login({ commit }, { email, password }) {
        return auth.login({ email, password }).then(res => {
            commit('setUser', { user: res.data })
            commit('setLogin', { isLogin: true })
        })
    },

    async register({ commit }, { email, password,password_confirmation }) {
        let res = await auth.register({ email, password,password_confirmation })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
        return res.data
    },

    async logout({ commit }) {
        await auth.logout()
        commit('setUser', { user: null })
        commit('setLogin', { isLogin: false })
    },

    async checkLogin({ commit, state }) {
        if (state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin', { isLogin: res.isLogin })
        if (!res.isLogin) return false
        commit('setUser', { user: res.resource })
        return true
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}