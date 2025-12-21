import { z } from 'zod';
import type { TApiGif } from '../types/types.ts';

const GiphyImageSchema = z.object({
  url: z.string(),
  width: z.string().optional(),
  height: z.string().optional(),
});

export const ApiGifSchema = z.object({
  id: z.string(),
  title: z.string(),
  username: z.string().optional(),
  import_datetime: z.string().optional(),
  images: z.object({
    original: GiphyImageSchema,
    fixed_height: GiphyImageSchema,
  }),
});

export const GiphyResponseSchema = z.object({
  data: z.array(ApiGifSchema),
});

export interface INormalizedGif {
  id: string;
  title: string;
  author: string;
  date: string;
  previewUrl: string;
  downloadUrl: string;
}

export const normalizeGif = (item: TApiGif): INormalizedGif => {
  return {
    id: item.id,
    title: item.title,
    author: item.username ?? 'Unknown',
    date: item.import_datetime ?? new Date().toISOString(),
    previewUrl: item.images.fixed_height.url,
    downloadUrl: item.images.original.url,
  };
};
