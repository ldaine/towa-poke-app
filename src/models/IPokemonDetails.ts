import { IPokemon } from "./IPokemon";

export interface IPokemonDetails extends IPokemon {
    height: number;
    baseExpirience: number;
    pictureUrl: string;
}