import { useState } from "react";
import "../styles/SearchGuest.css";
import { useApi } from "../../public/services/useApi";
import "../../public/services/guests.json";
import { useNavigate } from "react-router-dom";
const SearchGuest = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const { data, loading, error, request } = useApi("/services/guests.json");
    const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, ""); 
};
 const searchName = async () => {
  if (!fullName.trim()) {
    alert("Por favor ingresa un nombre válido");
    return;
  }

  const users = await request("");
  const guest = users ? users.guests : [];
  if (!users) return alert("No se pudo cargar la lista de invitados, intentalo más tarde");

  const user = guest.find(
    (user) => normalizeText(user.nombre) === normalizeText(fullName)
  );

  if (user) {
    localStorage.setItem("guestName", user.nombre);
    localStorage.setItem("table", user.mesa);
    navigate("/inicio");
    return;
  }
  return alert("No se encontró el nombre, puede ser que lo hayas escrito mal!");
};

  return (
    <div className="search-container">
      <h2>¡Escribe tu nombre completo, y sabrás donde sentarte!</h2>
      <input
        placeholder="Nombre Completo"
        className="input-searchGuest"
        onChange={(e) => setFullName(e.target.value)}
      />
      <button onClick={searchName} className="btn-searchGuest">
        Buscar
      </button>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
export default SearchGuest;
