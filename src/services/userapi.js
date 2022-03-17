import axios from 'axios';
export const caller = async function () {
    let result = await axios.post('/user', { name: "Azad" });
    console.log(result.data);
    return result.data;
};


export const register = async function (data) {
    let result = await axios.post('/register', data);
    return result.data;
}
export const getProduct = async function () {
    let response = await axios.get('https://dummyjson.com/products/1');
    return response.data;
}