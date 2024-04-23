import {useState} from 'react'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import './App.css'
import getRandom from './utils/getRamdonNumber'
import Phrase from './components/Phrase'  
import BtnPhrase from './components/BtnPhrase'

function App() {

  const indexRandom = getRandom(quotes.length)

  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
  const [bgSelect, setbgSelect] = useState(photos[getRandom(photos.length)])

  const objStyles = {
    backgroundImage: `url(/img/fondo${bgSelect}.jpg)`
  }

  const objStylesArticle = {
    borderRadius: '28% 0%' ,
    boxShadow: '10px 7px 20px rgba(0, 0, 255, 0.5)',
    
  }
  const objStylesTitle ={ 
    WebkitTextStroke: '1px white', color: 'transparent ',
    boxShadow: '10px 7px 20px rgba(0, 0, 255, 0.5)'
  }


  return (
   <div className='min-h-screen flex justify-center items-center bg-cover bg-center' style={objStyles}>
      <h1 className='absolute top-20 text-4xl uppercase font-bold text-shadow-md' style={objStylesTitle}>Consejo del dia</h1>

      <article className='max-w-[400px] p-6 bg-[#8ea3ff] bg-opacity-85 shadow-2xl rounded-md-tl border-2 border-blue-900' style={objStylesArticle}>
      
        <Phrase 
          phraseSelected={phraseSelected}
          phraseSelectedAuthor={phraseSelected}
        />

        <BtnPhrase
          setPhraseSelected={setPhraseSelected}
          setbgSelect = {setbgSelect}
        />

    


      </article>
      
    
    
   </div>
  )
}

export default App
