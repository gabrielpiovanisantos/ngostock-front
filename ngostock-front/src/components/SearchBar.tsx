export default function SearchBar({
                                      search,
                                      setSearch,
                                  }: Readonly<{
    search: string;
    setSearch: (value: string) => void;
}>) {
    return (
        <input
            placeholder="Buscar ONGs por nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
        />
    );
}
