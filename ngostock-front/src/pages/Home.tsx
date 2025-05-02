// src/pages/Home.tsx
import { useEffect, useState } from "react";
import OngCard from "../components/OngCard";
import { Ong } from "../types/Ong";
import mockOngs from "../data/ongs.json";
import {useNavigate} from "react-router-dom";


export default function Home() {
    const [ongs, setOngs] = useState<Ong[]>([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Carrega os dados mockados
        setOngs(mockOngs);
    }, []);

    const filteredOngs = ongs.filter((ong) =>
        ong.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <input
                type="text"
                placeholder="Buscar ONG..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
            />
            <button
                onClick={() => navigate("/cadastro")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition-transform hover:scale-105"
            >
                Cadastrar ONG
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredOngs.map((ong) => (
                    <OngCard key={ong.id} ong={ong} />
                ))}
            </div>
        </div>
    );
}
