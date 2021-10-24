import axios from 'axios';

import { Alert } from 'react-native';
import { BASE_URL } from '@src/config/api-config';
import { getValue } from '@src/utils/helper';

const getInstance = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        // timeout: constants.TIME_OUT,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    });
    instance.interceptors.request.use(
        async config => {
            const accessToken = await getValue('@AccessToken');
            config.headers = {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
                // ...dataCookie,
                // 'Content-Type': 'application/x-www-form-urlencoded'
            };
            return config;
        },
        error => {
            Promise.reject(error);
        }
    );

    // Response interceptor for API calls
    instance.interceptors.response.use(
        response => {
            console.log(`response ${response.config.url}:`, response);
            return response;
        },
        async error => {
            const originalRequest = error.config;
            Alert.alert('Something wrong with api')
            if (error?.response?.status === 401 && !originalRequest._retry) {
                // const refreshToken = await getRefreshToken();
                // originalRequest._retry = true;
                // return await instance
                //     .post('/token/refresh', {
                //         refresh_token: refreshToken,
                //     })
                //     .then(async res => {
                //         if (res.status === 201) {
                //             // 1) put token to LocalStorage
                //             await utils.asyncStorageSetItem(ACCESS_TOKEN, res.data);

                //             // 2) Change Authorization header
                //             const newToken = await getAccessToken();
                //             instance.defaults.headers.common.Authorization =
                //                 'Bearer ' + newToken;

                //             // 3) return originalRequest object with Axios.
                //             return instance(originalRequest);
                //         }
                //     });
            } else {
                // return error?.response;
            }
        }
    );
    return instance;
};

const API = getInstance()

export default API;
