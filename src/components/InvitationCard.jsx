import { Link } from "react-router-dom";
import "../styles/InvitationCard.css";

const InvitationCard = ({ guestName, table }) => {
  return (
    <div className="invitation-card">
      {/* Ositos en esquinas */}
      <img src="/imgs/imgInvitationCard.png" alt="Osito" className="teddy top-left" />
      <img src="/imgs/imgInvitationCard.png" alt="Osito" className="teddy top-right" />
      <img src="/imgs/imgInvitationCard.png" alt="Osito" className="teddy bottom-left" />
      <img src="/imgs/imgInvitationCard.png" alt="Osito" className="teddy bottom-right" />

      {/* Encabezado con arco, lazo y banner */}
      <div className="invitation-header">
        <img
          src="/imgs/imglazo2.png"
          alt="Lazo"
          className="invitation-bow"
        />
        <div className="invitation-banner">
          <h2>Mesa {table}</h2>
        </div>
      </div>

      {/* Nombre del invitado */}
      <div className="invitation-body">
        <h3 className="guest-name">{guestName}</h3>
        <p className="invitation-details">Fecha: 21 de Septiembre</p>
        <p className="invitation-details">Hora: 5:00 PM</p>
        <p className="invitation-details">
          Lugar: <span className="italic-text">Hacienda Salitrillos</span>
        </p>
        <p className="invitation-details enlace">
          <Link to="https://www.waze.com/es/live-map/directions/hacienda-salitrillos-salitrillos,-aserri?to=place.w.180813922.1808204761.7520175">
            Waze
          </Link>
        </p>
        <p>Recuerda llevar una prenda blanca</p>
        <h3>Te esperamos</h3>
      </div>
    </div>
  );
};

export default InvitationCard;
