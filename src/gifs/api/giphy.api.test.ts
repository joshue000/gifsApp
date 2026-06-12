import { describe, test, expect } from 'vitest';
import { giphyApi } from './giphy.api';

describe('Giphy API', () => {
  test('should have the correct base URL and parameters', () => {
    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
    expect(giphyApi.defaults.params).toEqual({
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      lang: 'en',
    });
  });

}); 