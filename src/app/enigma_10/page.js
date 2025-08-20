import EnigmaComponent from "@/components/page-enigma";

export default function Enigma9() {
  return (
    <EnigmaComponent
      correctResponse="te amo"
      enigmaNumber={10}
      enigmaTitle="Algumas respostas não estão na superfície. Leia com atenção e veja o que as letras escondidas revelam."
      enigmaCardText={
        <div className="flex flex-col">
          <p>Um dia, percebi que <b>T</b>udo o que eu buscava já estava diante de mim.</p>
          <p>Não é coincidência quando o coração sussurra, e você pensa: isso só pod<b>E</b> ser destino.</p>
          <p>O tempo passa, mas o que sinto por você continua <b>A</b>crescentando em cada detalhe.</p>
          <p>Às vezes, nem palavras bastam, mas um s<b>M</b>plo olhar já diz tudo.</p>
          <p>E no fim, é impossível negar o que sinto: só poderia ser <b>O</b> que existe entre nós.</p>
        </div>
      }
    />
  )
}