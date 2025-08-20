'use client'

import Link from "next/link";
import { useState } from "react";

export default function EnigmaComponent({ correctResponse, enigmaNumber, enigmaTitle, enigmaCardText, isEnigmaNumberWrong }) {
  const [response, setResponse] = useState('')

  const enigmaTo = enigmaNumber + 1

  const isFinalEnigma = enigmaNumber === 10

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl text-center text-primary mb-8">
          Enigma <b className="text-red-300">{isEnigmaNumberWrong ? 10 : enigmaNumber}</b>
        </h1>

        <p className="text-2xl text-[#B5B5C5]">“{enigmaTitle}”</p>


        {enigmaCardText && (
          <div className="rounded-2xl flex items-center justify-center bg-[#1C1C24] mb-24 p-2">
            {enigmaCardText}
          </div>
        )}
        

        <input
          className="w-full h-12 border-[#FFD166] border-2 rounded-lg text-lg p-2 active:outline-0 focus:outline-0"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>

      <Link
        href={isFinalEnigma ? '/finish' : `/enigma_${enigmaTo}`}
        className="bg-[#E63946] p-4 rounded-2xl text-2xl active:bg-[#FF6B81] flex items-center justify-center"
        onClick={(e) => {
          const ok = (response ?? "").trim().toLowerCase() === correctResponse;
          if (!ok) {
            e.preventDefault();
          }
        }}
      >
        Enigma {enigmaTo}
      </Link>
    </div>
  )
}