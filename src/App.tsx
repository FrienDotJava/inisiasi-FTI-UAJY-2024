import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
// import Filosofi from "./pages/Filosofi";
import Peserta from "./pages/Peserta";
import Media from "./pages/Media";
// import Panitia from "./pages/Panitia";
import Tugas from "./pages/Tugas";
// import Atribut from "./pages/Atribut";

const App: FC = () => {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/peserta" element={<Peserta />} />
        {/* <Route path="/filosofi" element={<Filosofi />} /> */}
        <Route path="/media" element={<Media />} />
        {/* <Route path="/panitia" element={<Panitia />} /> */}
        <Route path="/tugas" element={<Tugas />} />
        {/* <Route path="/atribut" element={<Atribut />} /> */}
      </Routes>
    </>
  );
};

export default App
