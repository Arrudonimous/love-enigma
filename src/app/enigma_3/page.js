import EnigmaComponent from "@/components/page-enigma";

export default function Enigma3() {
  return (
    <EnigmaComponent
      correctResponse="hamburguer"
      enigmaNumber={3}
      enigmaTitle="Naquela noite não havia castelos nem reinos. Apenas faróis acesos, duas almas ansiosas e uma refeição simples, mas inesquecível. Que banquete foi esse que dividimos no meu carro?"
    />
  )
}