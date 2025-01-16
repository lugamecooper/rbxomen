import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Game from "./pages/Game";
import Jobs from "./pages/Jobs";
import Support from "./pages/Support";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="game" element={<Game/>}/>
        <Route path="jobs" element={<Jobs/>}/>
        <Route path="support" element={<Support/>}/>
      </Route>
      <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;