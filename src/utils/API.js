import axios from "axios";

const API = {
    getPeople: function(){
        return axios.get("https://randomuser.me/api/?results=200&nat=us")
    }
}

export default API;
