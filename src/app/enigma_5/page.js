import EnigmaComponent from "@/components/page-enigma";

export default function Enigma4() {
  return (
    <EnigmaComponent
      correctResponse="eu te vivo"
      enigmaNumber={5}
      isEnigmaNumberWrong={true}
      enigmaTitle="Três palavras que sempre repito, mas estão escondidas sob um véu antigo. Apenas quem conhece o deslocamento da cifra pode revelá-las."
      enigmaCardText="OE DO FSFY"
    />
  )
}