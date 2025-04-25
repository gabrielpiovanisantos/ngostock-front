// src/components/OngCard.tsx
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {MapPin} from "lucide-react";
import {Ong} from "../types/Ong";

export default function OngCard({ong}: { ong: Ong }) {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{scale: 1.02}}
            className="transition-transform cursor-pointer"
            onClick={() => navigate(`/ong/${ong.id}`)}
        >
            <div className="rounded-2xl border border-gray-200 shadow-sm p-4 bg-white">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{ong.name}</h2>
            {ong.category}
                </div>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1"/> {ong.location}
                </p>
                <p className="text-sm mb-1">
                    <strong>Necessita:</strong>{" "}
                    {ong.needs.length > 0 ? ong.needs.map(n => n.item).join(", ") : "Nenhum item listado"}
                </p>
                <p className="text-sm">
                    <strong>Sobrando:</strong>{" "}
                    {ong.surplus.length > 0 ? ong.surplus.map(s => s.item).join(", ") : "Nenhum item listado"}
                </p>
            </div>
        </motion.div>
    );
}
