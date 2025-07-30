import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NoPage } from "./pages/NoPage";
import { Game } from "./pages/Game";
import { Jobs } from "./pages/Jobs";
import { Support } from "./pages/Support";
import { History } from "./pages/History";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="support" element={<Support/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="game" element={<Game/>}/>
                <Route path="jobs" element={<Jobs/>}/>
            </Route>
            <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export { App };
export default App;