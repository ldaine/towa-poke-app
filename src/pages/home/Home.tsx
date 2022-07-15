import { useState } from 'react';

import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import PokeService from 'src/services/PokeService';
import PokemonCard from 'src/components/pokemonCard/PokemonCard';
import { Pokemon } from 'src/models';

const Home: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useIonViewWillEnter(() => {
    PokeService.getAll().then(data => {
      console.log('Pokemon', data);
      setPokemon(data);
    });
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Towa Poke App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {pokemon.map(p => <PokemonCard key={p.name} pokemon={p} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
