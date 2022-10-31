import { AppContext } from "./AppContext";
import { useInitAppContext } from "./AppContext/useInitAppContext";
import { Header } from "./Header";
import { Main } from "./Main";

export const App = () => {
  return (
    <AppContext.Provider value={useInitAppContext()}>
      <Header>React Seed</Header>
      <Main />
    </AppContext.Provider>
  );
};
