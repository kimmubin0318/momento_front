import axios from 'axios';

const initInstance = (config) => {
    const instance = axios.create({
        timeout: 5000,
        ...config,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${authSessionStorage.get()?.token ?? ''}`,
            ...config.headers,
        },
    });

    return instance;
};

const BASE_URL = 'https://duoh.site/';
export const fetchInstance = (baseURL) => {
    return initInstance({
        baseURL: baseURL ?? BASE_URL,
    });
}
