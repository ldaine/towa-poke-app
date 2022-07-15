import { IPokemonRawData, Pokemon, PokemonDetails } from "src/models";

export default class PokeService {
    public static async getAll(): Promise<Pokemon[]>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        console.log('data', data); 
        return data?.results?.map((i:IPokemonRawData) => new Pokemon(i))
    }

    public static async getPokemon(id: string): Promise<PokemonDetails>{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data); 
        return new PokemonDetails(data);
    }
}