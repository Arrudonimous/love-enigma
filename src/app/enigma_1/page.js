import EnigmaComponent from "@/components/page-enigma";

export default function Enigma1(){
  return (
    <EnigmaComponent 
      correctResponse='bianca'
      enigmaNumber={1}
      enigmaTitle='As letras estão perdidas, como peças de um feitiço quebrado. Rearranje-as e encontrará o nome que me salvou do vazio.'
      enigmaCardText='AACBIN'
    />
  )
}