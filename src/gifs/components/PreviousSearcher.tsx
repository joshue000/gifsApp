interface Props {
  searches: string[];

  onLabelClicked: (term: string) => void;
}


const PreviousSearcher = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className='previous-searches'>
      <h2>Previous Searches</h2>
      <ul className='previous-searches-list'>
        {searches.map((term, index) => (
          <li 
            key={index} 
            onClick={() => onLabelClicked(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PreviousSearcher
