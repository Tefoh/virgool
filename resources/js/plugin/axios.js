import axios from 'axios';
import router from '@/router/router';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 404) {
        router.push({ name: 'not-found' });
    }
    if (error.response.status === 403) {
        router.push({ name: 'access-denied' });
    }

    return Promise.reject(error);
});

export default axios;
