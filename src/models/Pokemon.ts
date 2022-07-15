import { IPokemon } from "./IPokemon";
import { IPokemonRawData } from "./IPokemonRawData";

export class Pokemon implements IPokemon {
    public id: number; 
    public name: string;
    public detailUrl: string;

    constructor(rawdata: IPokemonRawData){
        const urlSplit = rawdata.url.split("/");
        this.id = parseInt(urlSplit[urlSplit.length - 2])
        this.name = rawdata.name;
        this.detailUrl = rawdata.url;
    }
}