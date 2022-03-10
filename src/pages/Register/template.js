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
        ...mapActions(['register']),
        onRegister() {
            this.register({
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(res => {
                this.$router.push({
                    path: '/login'
                })
            }).catch(err => {
                console.log(2, err);
            })
        },
    }
};