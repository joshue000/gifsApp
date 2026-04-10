import type { Gif } from '../interfaces/gif.interface';

interface Props {
  gifs: Gif[];
}

const GifList = ({ gifs }: Props) => {
  return (
    <div className='gifs-container'>
      {
        gifs.map((gif) => (
          <div key={gif.id} className='gif-item'>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.weight} x {gif.height} (1.5MB)</p>
          </div>
        ))
      }
    </div>
  )
}

export default GifList
