import axios from 'axios';

const http = axios.create({

});

http.interceptors.response.use((resp)=> {
    console.log('数据拦截啦');
    return resp.data.data;
})

export default http;