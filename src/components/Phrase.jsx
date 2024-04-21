

const Phrase = ({phraseSelected}) => {
  return (
    <p className="text-xl font-bold text-black font-serif ">{phraseSelected.phrase} <p className="text-sm italic text-black ">-{phraseSelected.author}</p></p>
    
  )
}

export default Phrase