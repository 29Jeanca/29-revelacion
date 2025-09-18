import InvitationCard from "../components/InvitationCard";
import { useEffect } from "react";
import { useApi } from "../../public/services/useApi";
const Home = () => {
    document.title = `Estás invitado! ${localStorage.getItem('guestName')}`;
    return(
        <>
        <InvitationCard guestName={localStorage.getItem('guestName')} invitationMessage={"no c que poner"} table={localStorage.getItem('table')} />
        </>
    )
}
export default Home;