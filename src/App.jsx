import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path=":detail" element={<Movies />}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
