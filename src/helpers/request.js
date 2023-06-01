import axios from 'axios'
import {
    Message
} from 'element-ui'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://123.57.85.69:3001/' : '/'
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        axios(option).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                // Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err => {
            Message.error(err.response.data.error)
            reject(err.response)
            // resolve(error)
        })
    })
}

// request('/auth/login', 'POST', {email: 'hunger', password: '123456'}).then(res=>{
//     console.log(res)
// })