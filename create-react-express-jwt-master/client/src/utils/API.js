import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  updateUser: (username, chronos) => {
    console.log("2")
    return axios.put('/api/update', {username: username, chronos: chronos})
  }
};
