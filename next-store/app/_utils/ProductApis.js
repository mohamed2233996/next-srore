const { default: axiosClinet } = require("./axiosClinet");

const getlatestProdact = ()=>axiosClinet.get('/products?populate=*')
const getProductById =(id)=>axiosClinet.get(`/products/${id}?populate=*`)
const getProductsByCategorey=(catogery)=>axiosClinet.get(`/products?filters[catogery][$eq]=${catogery}&populate=*`)

export default {
    getlatestProdact,
    getProductById,
    getProductsByCategorey
};