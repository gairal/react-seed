import { useAppContext } from "../AppContext";

import "./style.scss";

export const Main = () => {
  const { content } = useAppContext();

  return (
    <main className="main">
      <p>{content}</p>
    </main>
  );
};
