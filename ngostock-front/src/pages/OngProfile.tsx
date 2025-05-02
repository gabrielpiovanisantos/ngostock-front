import {useParams, useNavigate} from "react-router-dom";
import {ArrowLeft} from "lucide-react"; // ícone de voltar
// @ts-ignore
import ongs from "../data/ongs.json";
import {Ong} from "../types/Ong";
import {
    FaFacebook,
    FaInstagram,
    FaGlobe,
    FaWhatsapp,
} from "react-icons/fa";

export default function OngProfile() {
    const {id} = useParams();
    const navigate = useNavigate();

    const ong: Ong | undefined = ongs.find((o) => o.id.toString() === id);

    if (!ong) return <p className="p-6">ONG não encontrada.</p>;

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center text-blue-600 hover:underline"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Voltar para a lista
                </button>

                <button
                    onClick={() => navigate(`/edit/${ong.id}`)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition"
                >
                    Edit NGO
                </button>
            </div>

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
                                <FaFacebook
                                    className="w-6 h-6 text-blue-600 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700"/>
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
                                <FaInstagram
                                    className="w-6 h-6 text-pink-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600"/>
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
                                <FaGlobe
                                    className="w-6 h-6 text-gray-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600"/>
                            </a>
                        )}
                        {ong.socials?.phone && (
                            <a
                                href={`https://wa.me/${ong.socials.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                                className="bg-white rounded-full p-2 transition-all duration-300"
                            >
                                <FaWhatsapp
                                    className="w-6 h-6 text-green-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 transform hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600"/>
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
                                {item.name}: {item.quantity} {item.unit ?? ""}
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
                                {item.name}: {item.quantity} {item.unit ?? ""}
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
