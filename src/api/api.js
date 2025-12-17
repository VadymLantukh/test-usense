import axios from 'axios';
import { BASE_URL, GIPHY_API_KEY, LIMIT_GIF } from '../lib/constants.js';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: GIPHY_API_KEY,
  },
});

export const querySearchGifs = async query => {
  try {
    const response = await api.get('/search', {
      params: {
        q: query,
        limit: LIMIT_GIF,
        rating: 'g',
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};
