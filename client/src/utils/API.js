import axios from 'axios';

export default {
  getResult: function(id) {
    return axios.get("/result/id");
  },
  postResult: function(id, value) {
    return axios.post("/result/id/value");
  }
}