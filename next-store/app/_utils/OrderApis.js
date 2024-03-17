import axiosClinet from './axiosClinet';

// const{default :axiosClient} = require("./axiosClinet")


const CreateOrder =(data) => axiosClinet.post("/orders" , data)

export default {CreateOrder};