

const Phrase = ({ phraseSelected, phraseSelectedAuthor }) => {
  return (
    <p className="text-xl font-bold text-black font-serif ">{phraseSelected.phrase} <br /> <br /> -{phraseSelected.author} </p>
  )
}

export default Phrase