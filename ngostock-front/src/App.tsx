import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OngProfile from "./pages/OngProfile";
import RegisterNGO from "./pages/RegisterNGO";
import EditNGO from "./pages/EditNGO";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<RegisterNGO />} />
                <Route path="/ong/:id" element={<OngProfile />} />
                <Route path="/edit/:id" element={<EditNGO />} />
            </Routes>
        </BrowserRouter>
    );
}

