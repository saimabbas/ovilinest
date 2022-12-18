import Home from "./views/Home";
import Faq from "./views/Faq";
import Utility from "./views/Utility";
import JourneyMap from "./views/JourneyMap";
import Nest from "./views/Nest";
import World from "./views/World";
import Guide from "./views/Guide";

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
          <Route exact path="/utility" element={<Utility />} />
          <Route exact path="/journeymap" element={<JourneyMap />} />
          <Route exact path="/nest" element={<Nest />} />
          <Route exact path="/world" element={<World />} />
          <Route exact path="/guide" element={<Guide />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
