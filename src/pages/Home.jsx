import InvitationCard from "../components/InvitationCard";

const Home = () => {
    document.title = `Estás invitado! ${localStorage.getItem('guestName')}`;
    return(
        <>
        <InvitationCard guestName={localStorage.getItem('guestName')} invitationMessage={"no c que poner"} table={localStorage.getItem('table')} />
        </>
    )
}
export default Home;