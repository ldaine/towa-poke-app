import { IPokemonRawData, Pokemon, PokemonDetails } from "src/models";

export default class PokeService {
    private initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    private initialFetchDone = false;
    public totalPokemonCount = 0;
    public nextUrl = ""

    constructor(){
        this.initialFetchDone = false;
        this.totalPokemonCount = 0;
        this.nextUrl = "";
    }

    public async getAll(): Promise<Pokemon[]>{
        const url = this.initialFetchDone && !!this.nextUrl ? this.nextUrl : this.initialUrl;
        const response = await fetch(url);
        const data = await response.json();
        this.initialFetchDone = true;
        this.totalPokemonCount = data.count;
        this.nextUrl = data.next;
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