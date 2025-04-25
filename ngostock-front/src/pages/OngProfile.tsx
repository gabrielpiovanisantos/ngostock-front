import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // ícone de voltar
// @ts-ignore
import ongs from "../data/ongs.json";
import { Ong } from "../types/Ong";
import {
    FaFacebookF,
    FaInstagram,
    FaGlobeAmericas,
} from "react-icons/fa";

export default function OngProfile() {
    const { id } = useParams();
    const navigate = useNavigate();

    const ong: Ong | undefined = ongs.find((o) => o.id.toString() === id);

    if (!ong) return <p className="p-6">ONG não encontrada.</p>;

    // @ts-ignore
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <button
                onClick={() => navigate("/")}
                className="flex items-center text-blue-600 hover:underline mb-4"
            >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Voltar para a lista
            </button>

            <div
                className="h-64 rounded-2xl bg-cover bg-center mb-6"
                style={{
                    backgroundImage: `url(${ong.backgroundImage || "https://via.placeholder.com/800x300"})`,
                }}
            ></div>

            <h1 className="text-3xl font-bold mb-2">{ong.name}</h1>
            <p className="text-gray-600 mb-4">{ong.description}</p>

            {ong.socials && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Redes Sociais</h2>
                    <div className="flex space-x-4 my-4">
                        {ong.socials?.facebook && (
                            <a
                                href={ong.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Facebook"
                                className="bg-white rounded-full p-2 transition-all duration-300"
                            >
                                <FaFacebookF className="w-6 h-6 text-blue-600 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform" />
                            </a>
                        )}
                        {ong.socials?.instagram && (
                            <a
                                href={ong.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                                className="bg-white rounded-full p-2 transition-all duration-300"
                            >
                                <FaInstagram className="w-6 h-6 text-pink-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform" />
                            </a>
                        )}
                        {ong.socials?.website && (
                            <a
                                href={ong.socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Website"
                                className="bg-white rounded-full p-2 transition-all duration-300"
                            >
                                <FaGlobeAmericas className="w-6 h-6 text-gray-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform" />
                            </a>
                        )}
                    </div>
                </div>
            )}

            <p className="mb-4 text-gray-700">
                <strong>Endereço:</strong> {ong.location}
            </p>

            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-1">Itens Necessários</h2>
                {ong.needs.length ? (
                    <ul className="list-disc list-inside">
                        {ong.needs.map((item, index) => (
                            <li key={index}>
                                {item.name} : {item.quantity}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum item listado.</p>
                )}
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-1">Itens Sobrando</h2>
                {ong.surplus.length ? (
                    <ul className="list-disc list-inside">
                        {ong.surplus.map((item, index) => (
                            <li key={index}>
                                {item.name} : {item.quantity}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nenhum item disponível.</p>
                )}
            </div>
        </div>
    );
}
