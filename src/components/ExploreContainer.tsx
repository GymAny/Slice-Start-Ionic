import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLoading,
  IonSkeletonText,
} from "@ionic/react";
import { useLoading } from "@swyx/hooks";
import React from "react";
import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

function LambdaDemo() {
  const [isLoading, load] = useLoading();
  const [msg, setMsg] = React.useState(null);
  const handleClick = (api: string) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    load(
      fetch("/.netlify/functions/" + api)
        .then((response) => response.json())
        .then((json) => setMsg(json.msg))
    );
  };

  return (
    <p>
      <IonButton
        //@ts-ignore
        onClick={handleClick("hello")}
      >
        {"Call Lambda"}
      </IonButton>
      <IonButton
        //@ts-ignore
        onClick={handleClick("async-chuck-norris")}
      >
        {"Call Async Lambda"}
      </IonButton>
      <IonLoading isOpen={isLoading} />
      <br />
      {msg ? (
        <span>{msg}</span>
      ) : isLoading ? (
        <IonSkeletonText animated style={{ width: "60%" }} />
      ) : (
        <p />
      )}
    </p>
  );
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <LambdaDemo />
      </IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;
