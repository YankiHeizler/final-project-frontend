import axios from "axios";



// export const getfunction = async (url,pro) =>{
//     const res = await axios.get(`${url}${pro}`)
//     console.log(res.data);
//     return res.data
// }

const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
}

export default getProducts