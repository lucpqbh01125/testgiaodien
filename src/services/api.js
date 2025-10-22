import axios from 'axios';
import { toast } from 'react-toastify';
import jwt from './jwt';

let isRefreshing = false;
let waitingRequest = [];

// Thêm request vào chờ
const waitRequest = callback => {
  waitingRequest.push(callback);
};

// Thử các request chờ đến khi token mới có
const retryRequest = newToken => {
  waitingRequest.forEach(callback => callback(newToken));
  waitingRequest = [];
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Gán token vào request
api.interceptors.request.use(config => {
  const token = jwt.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Xử lí response
api.interceptors.response.use(
  res => res.data,
  async err => {
    const { response, config } = err;
    const status = response?.status;

    if (status === 401 && !config._retry) {
      if (!jwt.getToken()) {
        // khi mà không có token sẽ logout ra ngoài
        jwt.removeToken();
        window.location.href = '/login';
        return Promise.reject(err);
      }

      config._retry = true;

      if (isRefreshing) {
        // Nếu token đang được refresh, request này sẽ đợi token mới xong rồi mới gửi lại
        return new Promise(resolve => {
          waitRequest(newToken => {
            if (newToken) {
              config.headers.Authorization = `Bearer ${newToken}`;
              resolve(api(config));
            } else {
              resolve(Promise.reject(err));
            }
          });
        });
      }

      // Bắt đầu refresh token
      isRefreshing = true;
      try {
        // Ở đây project sẽ gọi server để láya token mới
        // Vd: const {access_token} = await authService.refreshToken();
        const access_token = '';
        jwt.setToken(access_token);
        retryRequest(access_token);

        config.headers.Authorization = `Bearer ${access_token}`;
        return api(config);
      } catch (err) {
        retryRequest(null);
        jwt.removeToken();
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    else {

    const message = err.response?.data?.message || err.message || 'An error occurred. Please try again.';
    toast.error(message);
    console.error('API Error', err.response?.data || err.message);
    return Promise.reject(err);
  }
  }
);

export default api;
