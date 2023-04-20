// phải import axios và queryString với cú pháp
// npm i --save axios query-string

// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const axiosClient = axios.create({
    // nầy gọi từ env cho nó gọn và clean
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    // từ 1 object chuyển sang string dùng queryString
    // cái params là quy định bao nhiêu sản phẩm, bao nhiêu trang! tùy vào mục đích mình dùng
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosClient;