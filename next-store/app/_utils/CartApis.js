import axiosClinet from './axiosClinet';

// const {default: axiosClient}  = require('./axiosClient');


const addToCart =(payload)=> axiosClinet.post('/carts',payload)
const getUserCart =(email)=> axiosClinet.get(`/carts?populate[products][populate]=img&filters[email][Seq]=${email}`)
const deleteCartItem =(id)=> axiosClinet.delete(`/carts/${id}`)

export default {
    addToCart,
    getUserCart,
    deleteCartItem
};