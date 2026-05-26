import GifList from './gifs/components/GifList'
import PreviousSearcher from './gifs/components/PreviousSearcher'
import useGifs from './gifs/hooks/useGifs'
import CustomHeader from './shared/components/CustomHeader'
import SearcherBar from './shared/components/SearcherBar'

const GifsApp = () => {

  const { previousTerms, gifs, handleSearch, handleTermClicked } = useGifs();

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
