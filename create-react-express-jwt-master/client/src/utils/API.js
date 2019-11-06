import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', { username: username, email: email, password: password });
  },
  livedata: () => {
    return axios.get("https://api.pandascore.co/matches?token=71QvB9vCC3xE099n8yoHlFK06KsAs3XbIJQy_QN0C9PK--yqOQg")
  },
  updateUser: (username, chronos, userBetA) => {
    return axios.put('/api/update', { username: username, chronos: chronos, userBetA: userBetA })
  },
  getAllUsers: () => {
    return axios.get('/api/allUsers')
  },
  currentmatchdata: () => {
    return axios.get("https://api.pandascore.co/lives?token=71QvB9vCC3xE099n8yoHlFK06KsAs3XbIJQy_QN0C9PK--yqOQg")
  },
}

