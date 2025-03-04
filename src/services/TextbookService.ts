import { AxiosRequestConfig } from 'axios';
import apiClient from './api';
import { TextbookType } from '@/lib/types';

const apiFunctions =  {
  getTextbooks(params? : AxiosRequestConfig) {
    return apiClient.get<TextbookType[]>('/textbooks/', params);
  },
  getUserTextbooks(username: string) {
    return apiClient.get('/textbooks/', { 
      params: { username }
    });
  },
  getTextbook(id: string) {
    return apiClient.get(`/textbook/${id}/`);
  },
  createTextbook(textbook: TextbookType, config: AxiosRequestConfig) {
    return apiClient.post('/textbook/create/', textbook, config);
  },
  updateTextbook(id: string, textbook: TextbookType) {
    return apiClient.put(`/textbooks/${id}/`, textbook);
  },
  deleteTextbook(id: string) {
    return apiClient.delete(`/textbooks/${id}/`);
  }
};

export default apiFunctions