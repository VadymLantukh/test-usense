import { z } from 'zod';
import type { ApiGifSchema } from '../schema/api.ts';

export type TApiGif = z.infer<typeof ApiGifSchema>;
