import axios from 'axios';

let BaseUrl = 'http://backend.local';

const http = axios.create({
    withCredentials: true,
});

export const apiClient = axios.create({
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': 'location',
    },
    baseURL: BaseUrl,
});

let dispatch;

apiClient.setDispatch = (d) => {
    dispatch = d;
};

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            if (!dispatch) {
                window.location.reload();
            }

            // Dispatch your actions here
            // dispatch(clear());
        }

        return Promise.reject(error);
    }
);

export default http;