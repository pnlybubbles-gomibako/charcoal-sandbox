import { useReducer } from "react";
import type { NextPage } from "next";
import { Icon } from "@charcoal-ui/react";
import "@charcoal-ui/icons";

const Home: NextPage = () => {
  const [state, toggle] = useReducer((v) => !v, false);
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <pixiv-icon name={state ? "32/Home" : "32/Close"}></pixiv-icon>
      <Icon name={state ? "32/Home" : "32/Close"}></Icon>
    </div>
  );
};

export default Home;
