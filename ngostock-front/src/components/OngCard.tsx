import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Ong } from "../types/Ong";

export default function OngCard({ ong }: Readonly<{ ong: Ong }>) {
    return (
        <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
            <div className="rounded-2xl border border-gray-200 shadow-sm p-4 bg-white">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{ong.name}</h2>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {ong.category}
          </span>
                </div>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1" /> {ong.location}
                </p>
                <p className="text-sm mb-1">
                    <strong>Necessita:</strong> {ong.needs.length > 0 ? ong.needs.join(", ") : "Nenhum item listado"}
                </p>
                <p className="text-sm">
                    <strong>Sobrando:</strong> {ong.surplus.length > 0 ? ong.surplus.join(", ") : "Nenhum item disponível"}
                </p>
            </div>
        </motion.div>
    );
}
