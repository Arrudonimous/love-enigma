import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-around h-full">
      <h1 className="text-3xl text-center text-primary">
        Um (Alguns) pequeno enigma de <b className="text-red-300">amor</b>
      </h1>
      
      <div className="flex flex-col gap-4 text-2xl text-center">
        <p>Espero que goste profundamente que goste disso, fiz com muito carinho pensando em cada detalhe em você.</p>
        <p>Eu te amo.</p>
        <p>Eu te vivo.</p>
      </div>

      <Link href='/home' className="bg-[#E63946] p-4 rounded-2xl text-2xl active:bg-[#FF6B81] flex items-center justify-center">
        Bora começar?
      </Link>
    </div>
  );
}
