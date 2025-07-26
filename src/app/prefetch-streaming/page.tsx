import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  fetchFirstPokemonOptions,
  fetchSecondPokemonOptions,
} from "../../fetch-mock";
import { FirstPokemon } from "../../first-pokemon";
import { getQueryClient } from "../../get-query-client";
import { SecondPokemon } from "../../second-pokemon";

export default function Page() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(fetchFirstPokemonOptions);
  queryClient.prefetchQuery(fetchSecondPokemonOptions);

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <h1>Prefetch Streaming</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <HydrationBoundary state={dehydratedState}>
          <FirstPokemon />
        </HydrationBoundary>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <HydrationBoundary state={dehydratedState}>
          <SecondPokemon />
        </HydrationBoundary>
      </Suspense>
    </>
  );
}
