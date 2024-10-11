import AppRouter from "./router/AppRouter";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;
//Setup React Router Dom
