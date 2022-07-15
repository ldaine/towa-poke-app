import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import './Details.css';
import PokeService from 'src/services/PokeService';
import { PokemonDetails } from 'src/models';

function Details() {
  const [message, setMessage] = useState<PokemonDetails>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    PokeService.getPokemon(params.id)
      .then(data => setMessage(data))
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
        {message ? (
          <div className="ion-padding">
            <h1>{message.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ) : (
          <div>Pokemon not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default Details;
