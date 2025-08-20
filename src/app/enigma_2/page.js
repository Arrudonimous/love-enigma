import EnigmaComponent from "@/components/page-enigma";

export default function Enigma2(){
  return (
    <EnigmaComponent
      correctResponse="la ville"
      enigmaNumber={2}
      enigmaTitle="Nem todas as letras estão à mostra, como lembranças borradas pelo tempo. Complete os espaços e encontrará o local onde tudo começou."
      enigmaCardText="L_  V_LL_"
    />
  )
}