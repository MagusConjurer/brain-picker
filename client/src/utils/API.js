import axios from 'axios';

export default {
  getTotalResults: function() {
    return axios.get("/api/users/result/total");
  },
  getResult: function(id) {
    return axios.get("/api/users/result/id");
  },
  postResult: function(id, value) {
    return axios.post("/api/users/result/id/value");
  }
}