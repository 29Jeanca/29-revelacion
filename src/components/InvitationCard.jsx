import "../styles/InvitationCard.css"
const InvitationCard = ({guestName,invitationMessage,table}) =>{
    return(
        <>
            <div className="invitation-card">
                <div className="invitation-header">
                    <img  src="public\imgs\imgInvitationCard.png" alt="Logo" className="invitation-logo" />
                    <h1 className="guest-name">{guestName}</h1>
                </div>
                <hr />
                <p className="invitation-message">{invitationMessage}</p>
                <div>
                    <p className="invitation-details">Fecha: 21 de Septiembre</p>
                    <p className="invitation-details">Hora: 5:00 PM</p>
                    <p className="invitation-details">Lugar: Confirmar</p>
                    <p className="invitation-details">Mesa #{table}</p>
                    <p className="invitation-details">enlace waze</p>
                </div>
            </div>
        </>
    )
}
export default InvitationCard;