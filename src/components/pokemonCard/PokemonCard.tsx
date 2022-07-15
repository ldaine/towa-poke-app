import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { Pokemon, PokemonDetails } from 'src/models';
import PokeService from 'src/services/PokeService';
import './PokemonCard.css';

interface PokemonCardProps {
  pokemon: Pokemon;
  grid?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, grid }) => {

  const [pokemonDetails, setpokemonDetails] = useState<PokemonDetails>();

  useEffect(() => {
    PokeService.getPokemon(pokemon.id.toString())
      .then(data => setpokemonDetails(data))
      .catch(error => console.log("Could not find pokemon", error));
  }, [pokemon]);

  return (
    <IonCard className={grid ? "grid" : ""} routerLink={`/pokemon/${pokemon.id}`}>
      <IonGrid>
        <IonRow>
          <IonCol><img src={pokemonDetails?.pictureUrl} /></IonCol>
          <IonCol>
            <IonCardHeader>
              <IonCardSubtitle>{pokemonDetails?.baseExpirience}</IonCardSubtitle>
              <IonCardTitle>{pokemonDetails?.name}</IonCardTitle>
            </IonCardHeader>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

PokemonCard.defaultProps = {
  grid: false
}

export default PokemonCard;
