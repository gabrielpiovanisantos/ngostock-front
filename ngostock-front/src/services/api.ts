import { Ong } from "../types/Ong";

// @ts-ignore
export const fetchOngs = async (): Promise<Ong[]> => {
    return [
        {
            id: 1,
            name: "ONG Vida Animal",
            category: "Animais",
            needs: ["Ração", "Medicamentos"],
            surplus: ["Cobertores"],
            location: "São Paulo, SP",
        },
        {
            id: 2,
            name: "Educar para o Futuro",
            category: "Educação",
            needs: ["Livros", "Mochilas"],
            surplus: [],
            location: "Belo Horizonte, MG",
        },
    ];
};
