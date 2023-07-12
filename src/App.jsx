import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path=":title" element={<MovieDetail />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
