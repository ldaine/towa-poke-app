import { useState } from 'react';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';
import { list, grid } from 'ionicons/icons';
import PokemonCard from 'src/components/pokemonCard/PokemonCard';
import { Pokemon } from 'src/models';
import PokeService from 'src/services/PokeService';

enum View {
  List,
  Grid
}

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [view, setView] = useState<View>(View.List);

  useIonViewWillEnter(() => {
    PokeService.getAll().then(data => {
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
          <IonButtons slot="secondary">
          <IonButton disabled={view === View.List} onClick={() => setView(View.List)}>
            <IonIcon slot="icon-only" icon={list} />
          </IonButton>
          <IonButton disabled={view === View.Grid} onClick={() => setView(View.Grid)}>
            <IonIcon slot="icon-only" icon={grid} />
          </IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {
          view === View.List 
          ? <IonList> { pokemon.map(p => <PokemonCard key={p.name} pokemon={p} />) } </IonList>
          : <div className="flex-grid">{ pokemon.map(p => <PokemonCard key={p.name} pokemon={p} grid={true}  />) }</div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
