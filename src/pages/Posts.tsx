import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import WPPosts from '../components/WPPosts';
import './Posts.css';

const Posts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>

        <WPPosts />

      </IonContent>
    </IonPage>
  );
};

export default Posts;
