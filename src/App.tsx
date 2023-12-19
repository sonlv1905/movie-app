import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import HomeComponent from "./pages/HomeComponent/HomeComponent";
import ListComponent from "./pages/ListComponent/ListComponent";
import DetailComponent from "./pages/DetailComponent/DetailComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="list-movie" element={<ListComponent />} />
          <Route path="detail-movie/:id" element={<DetailComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
