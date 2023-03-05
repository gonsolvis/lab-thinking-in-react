import { useState } from "react";

function SearchBar({ filter }) {

    const [filtro, setFiltro] = useState("");

    const filtroHandler = (e) => {
        setFiltro(e.target.value);
        filter(e.target.value);
    }
    return (
        <div>
            <h3>Search</h3>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" value={filtro} onChange={filtroHandler} />
            <hr />
        </div>
    );
}

export default SearchBar;