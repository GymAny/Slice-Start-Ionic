import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
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
        {isLoading ? "Loading..." : "Call Lambda"}
      </IonButton>
      <IonButton
        //@ts-ignore
        onClick={handleClick("async-chuck-norris")}
      >
        {isLoading ? "Loading..." : "Call Async Lambda"}
      </IonButton>
      <br />
      <span>{msg}</span>
    </p>
  );
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <LambdaDemo />
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
