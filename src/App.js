import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/home";
import Model from "./pages/model";
// Components
import Header from "./components/header";
// Styles
import "./App.scss";
// Hooks
import useWindowDimensions from "./hooks/useWindowDimension";

const AppRoutes = ({ imageDetails }) => {
  const location = useLocation();

  return (
    <AnimatePresence /* initial={false} */ mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home imageDetails={imageDetails} />} />
        <Route
          path='/model/:id'
          element={<Model imageDetails={imageDetails} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { width } = useWindowDimensions();
  const imageDetails = {
    width: width > 575 ? 524 : 300,
    height: 650,
  };

  return (
    <Router>
      <Header />
      <AppRoutes imageDetails={imageDetails} />
    </Router>
  );
}

export default App;
