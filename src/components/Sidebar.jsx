import styles from '../styles/styles';
import TicketCard from './TicketCard';

// const Sidebar = ({ tickets, selectedTicketId, onSelect }) => {
//   return (
//     <div style={styles.sidebar}>
//       <h3 style={{ marginBottom: '1rem' }}>🎫 Tickets</h3>
//       {tickets.map(ticket => (
//         <TicketCard
//           key={ticket.id}
//           ticket={ticket}
//           isActive={selectedTicketId === ticket.id}
//           onClick={() => onSelect(ticket.id)}
//         />
//       ))}
//     </div>
//   );
// };
const Sidebar = ({ tickets, selectedTicketId, onSelect, searchTerm, setSearchTerm }) => {
  return (
    <div style={styles.sidebar}>
      <h3 style={{ marginBottom: '1rem' }}>🎫 Tickets</h3>

      <input
        type="text"
        placeholder="Search tickets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '93%',
          padding: '0.5rem',
          marginBottom: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />

      {tickets.length > 0 ? (
        tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            isActive={selectedTicketId === ticket.id}
            onClick={() => onSelect(ticket.id)}
          />
        ))
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};


export default Sidebar;
