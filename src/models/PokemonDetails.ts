import { IPokemonDetails } from "./IPokemonDetails";
import { IPokemonDetailsRawData } from "./IPokemonDetailsRawData";


export class PokemonDetails implements IPokemonDetails {
    public id: number;
    public name: string;
    public height: number;
    public baseExpirience: number;
    public pictureUrl: string;

    constructor(rawdata: IPokemonDetailsRawData){
        this.id = rawdata.id;
        this.name = rawdata.name;
        this.height = rawdata.height;
        this.baseExpirience = rawdata.base_experience;
        this.pictureUrl = rawdata.sprites.front_default;
    }
}