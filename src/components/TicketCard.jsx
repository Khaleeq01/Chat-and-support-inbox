import styles from '../styles/styles';

const TicketCard = ({ ticket, isActive, onClick }) => {
  return (
    <div onClick={onClick} style={styles.ticketCard(isActive)}>
      <strong>{ticket.name}</strong>
      <p style={{ margin: '0.3rem 0' }}>{ticket.description}</p>
      <small>{ticket.date} • {ticket.time}</small><br />
      <small>Status: <em>{ticket.status}</em></small>
    </div>
  );
};

export default TicketCard;
