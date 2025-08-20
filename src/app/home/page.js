import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-around h-full">
      <h1 className="text-3xl text-center text-primary">
        Um (Alguns) pequeno enigma de <b className="text-red-300">amor</b>
      </h1>

      <div className="flex flex-col gap-4 text-2xl text-justify">
        "O relógio marca 10 meses desde que um portal se abriu e nossas vidas se cruzaram.
        Mas cada história esconde segredos.
        Para revelar a mensagem final, você precisa decifrar 10 enigmas.
        Alguns guardam memórias, outros testam lógica, e outros pedem o coração como chave.
        Está pronta para enfrentar o desconhecido, Meu Amor?"
      </div>

      <Link href='/enigma_1' className="bg-[#E63946] p-4 rounded-2xl text-2xl active:bg-[#FF6B81] flex items-center justify-center">
        Enigma 1
      </Link>
    </div>
  );
}
