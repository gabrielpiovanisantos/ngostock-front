import {Item} from "./Item";

export interface Ong {
    backgroundImage: string;
    id: number;
    name: string;
    description: string;
    category: string;
    needs: Item[];
    surplus: Item[];
    location: string;
    socials: {
        facebook?: string;
        instagram?: string;
        website?: string;
        phone?: string;
    };
}
