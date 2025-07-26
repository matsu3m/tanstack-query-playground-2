import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  fetchFirstPokemonOptions,
  fetchSecondPokemonOptions,
} from "../../fetch-mock";
import { FirstPokemon } from "../../first-pokemon";
import { getQueryClient } from "../../get-query-client";
import { SecondPokemon } from "../../second-pokemon";

export default async function Page() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery(fetchFirstPokemonOptions),
    queryClient.prefetchQuery(fetchSecondPokemonOptions),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <h1>Prefetch Await</h1>

      <HydrationBoundary state={dehydratedState}>
        <FirstPokemon />
        <SecondPokemon />
      </HydrationBoundary>
    </>
  );
}
