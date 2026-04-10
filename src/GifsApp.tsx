import { useState } from 'react'
import GifList from './gifs/components/GifList'
import PreviousSearcher from './gifs/components/PreviousSearcher'
import { mockGifs } from './mocks-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import SearcherBar from './shared/components/SearcherBar'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.actions'
import type { Gif } from './gifs/interfaces/gif.interface'

const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>(mockGifs);

  const handleTermClicked = (term: string) => {
    console.log(`Term clicked: ${term}`);
  };

  const handleSearch = async (query: string) => {
    if (query.trim() === '') return;
    
    query = query.trim().toLowerCase();

    if (previousTerms.includes(query)) return;
    
    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader 
        title='Gif Searcher' 
        description='Discover and share the perfect gif' 
      />

      {/* Search */}
      <SearcherBar placeholder='Search for gifs...' onQuery={handleSearch} />

      {/* Previous Searches */}
      <PreviousSearcher searches={previousTerms} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  )
}

export default GifsApp
