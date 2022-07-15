import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react';
import { Pokemon } from 'src/models';
import './PokemonCard.css';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <IonCard routerLink={`/pokemon/${pokemon.id}`}>
      <IonCardHeader>
        <IonCardSubtitle>{pokemon.name}</IonCardSubtitle>
        <IonCardTitle>{pokemon.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
    </IonCard>
  );
};

export default PokemonCard;