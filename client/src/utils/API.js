import axios from "axios";

export default {

    getAllQuizzes: function() {
        return axios.get("/api/quiz/");
    }
};