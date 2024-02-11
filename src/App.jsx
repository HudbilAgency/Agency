/* eslint-disable no-unused-vars */
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import Routers from "./router/Routers";
import Cursor from "./components/cursor-animation/cursor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Cursor />
      <Router>
        <ScrollToTop />
        <Routers />
      </Router>
    </>
  );
}

export default App;
