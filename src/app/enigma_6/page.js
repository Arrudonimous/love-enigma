import EnigmaComponent from "@/components/page-enigma";

export default function Enigma4() {
  return (
    <EnigmaComponent
      correctResponse="diego"
      enigmaNumber={6}
      enigmaTitle="Não em pergaminhos, não em cartas, mas em zeros e uns. O nome gravado nesse código não é apenas um conjunto de letras — é quem guia esta história."
      enigmaCardText="01100100 01101001 01100101 01100111 01101111"
    />
  )
}