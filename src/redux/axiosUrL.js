import axios from "axios";

const axiosUrl = axios.create({
    baseURL: "https://backend.instarupees.com/api/"
})

export default axiosUrl;