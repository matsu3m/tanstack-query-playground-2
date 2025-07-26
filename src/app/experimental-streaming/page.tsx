import { Suspense } from "react";
import { FirstPokemon } from "../../first-pokemon";
import { SecondPokemon } from "../../second-pokemon";

export default function Page() {
  return (
    <>
      <h1>Experimental Streaming</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <FirstPokemon />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <SecondPokemon />
      </Suspense>
    </>
  );
}
