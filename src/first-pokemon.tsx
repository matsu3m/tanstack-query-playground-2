"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchFirstPokemonOptions } from "./fetch-mock";

export const FirstPokemon = () => {
  const {
    data: { name },
  } = useSuspenseQuery(fetchFirstPokemonOptions);

  return <p>{name}</p>;
};
