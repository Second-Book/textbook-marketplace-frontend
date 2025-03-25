import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
  withCredentials: false, // This is the default
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401 && localStorage && localStorage.getItem('refresh_token')) {
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await apiClient.post('/token/refresh/', { refresh: refreshToken });
        localStorage.setItem('access_token', response.data.access);
        error.config.headers['Authorization'] = `Bearer ${response.data.access}`;
        return apiClient.request(error.config); // Retry the failed request
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;