import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { mockGifs } from '../../mocks-data/gifs.mock';
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions';

// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {
  
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>(mockGifs);

  const gifsCache = useRef<Record<string, Gif[]>>({});


  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQuery(term);

    setGifs(gifs);

    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string) => {
    if (query.trim() === '') return;
    
    query = query.trim().toLowerCase();

    if (previousTerms.includes(query)) return;
    
    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
    
    gifsCache.current[query] = gifs;
  };

  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked
  }
}

export default useGifs