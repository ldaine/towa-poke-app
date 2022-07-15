import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import './Details.css';
import PokeService from 'src/services/PokeService';
import { PokemonDetails } from 'src/models';

function Details() {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    PokeService.getPokemon(params.id)
      .then(data => setPokemon(data))
      .catch(error => console.log("Could not find pokemon", error));
  });

  return (
    <IonPage id="details-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Overview" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {pokemon ? (
          <div className="ion-padding">
            <h1>{pokemon.name}</h1>
            <img src={pokemon?.pictureUrl} />
            <IonGrid>
              <IonRow>
                <IonCol><strong>Base Expirience</strong></IonCol>
                <IonCol>{pokemon.baseExpirience}</IonCol>
              </IonRow>
              <IonRow>
                <IonCol><strong>Height</strong></IonCol>
                <IonCol>{pokemon.height}</IonCol>
              </IonRow>
            </IonGrid>
          </div>
        ) : (
          <div>Pokemon not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default Details;
