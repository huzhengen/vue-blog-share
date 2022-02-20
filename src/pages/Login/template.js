import {
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: '',
            password_confirmation: '',
        }
    },

    methods: {
        ...mapActions(['login']),
        onLogin() {
            this.login({
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(() => {
                this.$router.push({
                    path: this.$route.query.redirect || '/'
                })
            })
        },
    }
};