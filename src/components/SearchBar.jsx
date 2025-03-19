import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    onSearch(searchTerm); // Chama a função de pesquisa passada como prop
  };

  return (
    <input
      type="text"
      placeholder="Pesquisar..."
      value={query}
      onChange={handleChange}
      className="p-2 border rounded w-full"
    />
  );
};

export default SearchBar;
