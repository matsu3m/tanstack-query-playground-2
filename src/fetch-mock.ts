import { queryOptions } from "@tanstack/react-query";

export const fetchFirstPokemonOptions = queryOptions({
  queryFn: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { name: "Bulbasaur" };
  },
  queryKey: ["pokemon", 1],
});

export const fetchSecondPokemonOptions = queryOptions({
  queryFn: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { name: "Ivysaur" };
  },
  queryKey: ["pokemon", 2],
});
