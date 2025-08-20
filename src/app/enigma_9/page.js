import EnigmaComponent from "@/components/page-enigma";

export default function Enigma9() {
  return (
    <EnigmaComponent
      correctResponse="dante e diana"
      enigmaNumber={9}
      enigmaTitle="Dois corações unidos não apenas somam — eles se multiplicam. Resolva a fórmula e encontrará os nomes que um dia chamarão por nós."
      enigmaCardText="(D + B)²"
    />
  )
}