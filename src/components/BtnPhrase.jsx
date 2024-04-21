import getRandom from "../utils/getRamdonNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setbgSelect}) => {

    const changePhrase = () => {
        const indexRandom = getRandom(quotes.length)
        
        setPhraseSelected(quotes[indexRandom])
        setbgSelect(photos[getRandom(photos.length)])

    }
  return (
    <button className="ml-auto block cursor-pointer bg-gray-800 border-solid border-2 border-gray-900 py-2 px-4 text-white rounded-md text-sm hover:brightness-200" onClick={changePhrase}>FRASE</button>
  )
}

export default BtnPhrase