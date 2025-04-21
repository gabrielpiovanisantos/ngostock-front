// @ts-ignore
import React, { SetStateAction, useState} from 'react';

interface Ong {
    id: number;
    name: string;
    city: string;
    state: string;
    category: string;
    needs: string;
    surplus: string;
}

const mockOngs: Ong[] = [
    {
        id: 1,
        name: 'ONG Vida Animal',
        city: 'São Paulo',
        state: 'SP',
        category: 'Animais',
        needs: 'Ração, Medicamentos',
        surplus: 'Cobertores',
    },
    {
        id: 2,
        name: 'Educar para o Futuro',
        city: 'Belo Horizonte',
        state: 'MG',
        category: 'Educação',
        needs: 'Livros, Mochilas',
        surplus: 'Nenhum item disponível',
    },
];

const Home: React.FC = () => {
    const [search, setSearch] = useState('');

    const filteredOngs = mockOngs.filter((ong) =>
        ong.name.toLowerCase()
    );

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Encontre ONGs próximas</h1>

            <input
                type="text"
                placeholder="Buscar ONG pelo nome..."
                value={search}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearch(e.target.value)}
                className="w-full p-3 border rounded-md mb-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredOngs.map((ong) => (
                    <div
                        key={ong.id}
                        className="bg-white rounded-xl shadow p-5 border border-gray-200 relative"
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-lg font-semibold">{ong.name}</h2>
                            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                {ong.category}
              </span>
                        </div>

                        <p className="text-gray-500 text-sm mt-1">
                            📍 {ong.city}, {ong.state}
                        </p>

                        <p className="mt-3 text-sm">
                            <strong>Necessita:</strong> {ong.needs}
                        </p>
                        <p className="text-sm">
                            <strong>Sobrando:</strong> {ong.surplus}
                        </p>
                    </div>
                ))}

                {filteredOngs.length === 0 && (
                    <p className="text-gray-500">Nenhuma ONG encontrada.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
