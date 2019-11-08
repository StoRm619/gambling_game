import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {
      username: username,
      email: email,
      password: password
    });
  },
  livedata: () => {
    return axios.get("/api/livedata");
  },
  livedata5: () => {
    return axios.get("/api/livedata5")
  },
  updateUser: (username, chronos, userBetA) => {
    return axios.put("/api/update", {
      username: username,
      chronos: chronos,
      userBetA: userBetA
    });
  },
  updateUserB: (username, chronos, userBetB) => {
    return axios.put("/api/updateB", {
      username: username,
      chronos: chronos,
      userBetB: userBetB
    });
  },
  getAllUsers: () => {
    return axios.get("/api/allUsers");
  },
  payWinners: (username, chronos) => {
    return axios.put("/api/payWinners", {
      username: username,
      chronos: chronos
    });
  }
};

