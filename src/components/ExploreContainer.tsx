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
      fetch("/.netlify/lambda/" + api)
        .then((response) => response.json())
        .then((json) => setMsg(json.msg))
    );
  };

  return (
    <p>
      <button onClick={handleClick("hello")}>
        {isLoading ? "Loading..." : "Call Lambda"}
      </button>
      <button onClick={handleClick("async-chuck-norris")}>
        {isLoading ? "Loading..." : "Call Async Lambda"}
      </button>
      <br />
      <span>{msg}</span>
    </p>
  );
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <LambdaDemo />
    </div>
  );
};

export default ExploreContainer;
