import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OngProfile from "./pages/OngProfile";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ong/:id" element={<OngProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

