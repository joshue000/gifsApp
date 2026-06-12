import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import { getGifsByQuery } from "./get-gifs-by-query.actions";
import { giphyApi } from "../api/giphy.api";
import { giphyResponseDataMock } from "../../../test/mocks/giphy.response.data";

describe('getGifsByQuery actions', () => {

  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });
  // test('should return an array of gifs based on the query', async () => {
  //   const gifs = await getGifsByQuery('cats');
  //   const [gif1] = gifs;

  //   expect(gifs.length).toBe(10);
  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     weight: expect.any(Number),
  //     height: expect.any(Number),
  //   });
  // });

  test('should returna a list of gifs', async () => {
    mock.onGet('/search').reply(200, giphyResponseDataMock);

    const gifs = await getGifsByQuery('goku');

    expect(gifs).toHaveLength(10);
    gifs.forEach(gif => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.weight).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });

  test('should return an empty array if the query is empty', async () => {
    mock.restore();
    const gifs = await getGifsByQuery('');
    expect(gifs.length).toEqual(0);
  });

  test('should handle errors and return an empty array', async () => {

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    mock.onGet('/search').reply(400, { 
      data: {
        message: 'Bad Request'
      }
    });

    const gifs = await getGifsByQuery('goku');

    expect(gifs).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});