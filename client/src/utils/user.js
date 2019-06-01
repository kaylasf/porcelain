import axios from 'axios'

const User = {
    getOne: userId => axios.get(`/user/${userId}`),
    findOne: loginCreds => axios.post(`/login`, loginCreds),
    postOne: signUpObj => axios.post('/user', signUpObj),
    findAnother: email => axios.get(`/user/${email}`)
}

export default User
 //authentication server?