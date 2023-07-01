import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import WPPages from '../components/WPPages';
// import './Pages.css';

const Posts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pages</IonTitle>
          </IonToolbar>
        </IonHeader>

        <WPPages />

      </IonContent>
    </IonPage>
  );
};

export default Posts;
