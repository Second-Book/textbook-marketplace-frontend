import { AxiosRequestConfig } from 'axios';
import apiClient from './api';
import { TextbookType } from '@/utils/types';

const apiFunctions =  {
  async getTextbooks(params? : AxiosRequestConfig) {
    try {
      return await apiClient.get<TextbookType[]>('/textbooks/', params);
    } catch (err) {
      console.log(err)
      throw new Error(`Failed to fetch textbooks: ${err}`)
    }
  },
  getUserTextbooks(username: string) {
    try {
      return apiClient.get<TextbookType[]>('/textbooks/', {
        params: { username }
      });
    } catch (err) {
      throw new Error(`Failed to fetch user textbooks: ${err}`)
    }
  },
  getTextbook(id: string) {
    return apiClient.get(`/textbook/${id}/`);
  },
  createTextbook(textbook: FormData, config: AxiosRequestConfig) {
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