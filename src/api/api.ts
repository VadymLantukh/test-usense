import axios from 'axios';

import { BASE_URL, GIPHY_API_KEY, LIMIT_GIF } from '../lib/constants.ts';

import {
  GiphyResponseSchema,
  type INormalizedGif,
  normalizeGif,
} from '../schema/api.ts';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: GIPHY_API_KEY,
  },
});

export const querySearchGifs = async (
  query: string
): Promise<INormalizedGif[]> => {
  try {
    const response = await api.get('/search', {
      params: {
        q: query,
        limit: LIMIT_GIF,
        rating: 'g',
      },
    });

    const parsedData = GiphyResponseSchema.parse(response.data);
    return parsedData.data.map(normalizeGif);
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};
