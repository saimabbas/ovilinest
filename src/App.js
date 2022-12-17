import Home from "./views/Home";
import Faq from "./views/Faq";

import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faq" element={<Faq />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
