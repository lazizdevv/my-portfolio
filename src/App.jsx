import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout/main-layout";
import Portfolio from "./pages/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Portfolio />} /> {/* Bosh sahifa */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
