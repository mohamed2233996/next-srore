const { default: axios } = require("axios");

const apikay = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl='http://localhost:1338/api'

const axiosClinet =  axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apikay}`
    }
})

export default axiosClinet;