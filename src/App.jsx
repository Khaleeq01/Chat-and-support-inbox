// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [tickets, setTickets] = useState([
//     {
//       id: '1',
//       name: 'Login Issue',
//       description: 'Cannot log in to the portal',
//       date: '2025-07-13',
//       time: '10:00',
//       status: 'Pending',
//       messages: [
//         { name: 'Learner', message: 'I’m unable to log in.' },
//         { name: 'Support', message: 'Try resetting your password.' },
//       ],
//     },
//     {
//       id: '2',
//       name: 'Payment Failed',
//       description: 'Transaction declined',
//       date: '2025-07-12',
//       time: '16:30',
//       status: 'Unread',
//       messages: [
//         { name: 'Learner', message: 'Payment is failing repeatedly.' },
//         { name: 'Support', message: 'Use a different card or method.' },
//       ],
//     },
//   ]);

//   const [selectedTicketId, setSelectedTicketId] = useState(null);
//   const [reply, setReply] = useState('');

//   const selectedTicket = tickets.find(ticket => ticket.id === selectedTicketId);

//   const handleSend = () => {
//     if (!reply.trim()) return;

//     const updatedTickets = tickets.map(ticket =>
//       ticket.id === selectedTicketId
//         ? {
//             ...ticket,
//             messages: [...ticket.messages, { name: 'Learner', message: reply }],
//           }
//         : ticket
//     );

//     setTickets(updatedTickets);
//     setReply('');
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       height: '100vh',
//       fontFamily: 'Segoe UI, sans-serif',
//     },
//     sidebar: {
//       width: '25%',
//       backgroundColor: '#1e293b',
//       color: '#f1f5f9',
//       padding: '1rem',
//       overflowY: 'auto',
//     },
//     ticketCard: (isActive) => ({
//       border: '1px solid #475569',
//       borderRadius: '8px',
//       padding: '0.75rem',
//       marginBottom: '0.75rem',
//       backgroundColor: isActive ? '#3b82f6' : '#334155',
//       cursor: 'pointer',
//     }),
//     chatPanel: {
//       flex: 1,
//       padding: '1.5rem',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     chatBox: {
//       flex: 1,
//       overflowY: 'auto',
//       border: '1px solid #cbd5e1',
//       padding: '1rem',
//       borderRadius: '8px',
//       backgroundColor: '#f8fafc',
//     },
//     message: (sender) => ({
//       textAlign: sender === 'Learner' ? 'right' : 'left',
//       marginBottom: '0.75rem',
//     }),
//     messageBubble: (sender) => ({
//     display: 'inline-block',
//     padding: '0.5rem 1rem',
//     backgroundColor: sender === 'Learner' ? '#fde68a' : '#d1fae5',
//     borderRadius: '10px',
//     maxWidth: '70%',
//     color: '#111827', // Tailwind gray-900 for dark text
//     }),
//     inputRow: {
//       display: 'flex',
//       marginTop: '1rem',
//     },
//     input: {
//       flex: 1,
//       padding: '0.5rem',
//       borderRadius: '4px',
//       border: '1px solid #cbd5e1',
//       fontSize: '1rem',
//     },
//     sendButton: {
//       marginLeft: '0.5rem',
//       padding: '0.5rem 1rem',
//       backgroundColor: '#3b82f6',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <h3 style={{ marginBottom: '1rem' }}>🎫 Tickets</h3>
//         {tickets.map((ticket) => (
//           <div
//             key={ticket.id}
//             onClick={() => setSelectedTicketId(ticket.id)}
//             style={styles.ticketCard(selectedTicketId === ticket.id)}
//           >
//             <strong>{ticket.name}</strong>
//             <p style={{ margin: '0.3rem 0' }}>{ticket.description}</p>
//             <small>{ticket.date} • {ticket.time}</small><br />
//             <small>Status: <em>{ticket.status}</em></small>
//           </div>
//         ))}
//       </div>

//       {/* Chat Panel */}
//       <div style={styles.chatPanel}>
//         {selectedTicket ? (
//           <>
//             <h2>{selectedTicket.name}</h2>
//             <div style={styles.chatBox}>
//               {selectedTicket.messages.map((msg, idx) => (
//                 <div key={idx} style={styles.message(msg.name)}>
//                   <div style={styles.messageBubble(msg.name)}>
//                     <strong>{msg.name}:</strong> {msg.message}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div style={styles.inputRow}>
//               <input
//                 type="text"
//                 value={reply}
//                 onChange={(e) => setReply(e.target.value)}
//                 placeholder="Type your reply..."
//                 style={styles.input}
//               />
//               <button onClick={handleSend} style={styles.sendButton}>
//                 Send
//               </button>
//             </div>
//           </>
//         ) : (
//           <p style={{ color: '#64748b' }}>🡐 Select a ticket to view conversation</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import ChatPanel from './components/ChatPanel';
// import styles from './styles/styles';


// const App = () => {
//   const [tickets, setTickets] = useState([
//     {
//       id: '1',
//       name: 'Login Issue',
//       description: 'Cannot log in to the portal',
//       date: '2025-07-13',
//       time: '10:00',
//       status: 'Pending',
//       messages: [
//         { name: 'Learner', message: 'I’m unable to log in.' },
//         { name: 'Support', message: 'Try resetting your password.' },
//       ],
//     },
//     {
//       id: '2',
//       name: 'Payment Failed',
//       description: 'Transaction declined',
//       date: '2025-07-12',
//       time: '16:30',
//       status: 'Unread',
//       messages: [
//         { name: 'Learner', message: 'Payment is failing repeatedly.' },
//         { name: 'Support', message: 'Use a different card or method.' },
//       ],
//     },
//   ]);

//   const [selectedTicketId, setSelectedTicketId] = useState(null);
//   const [reply, setReply] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const selectedTicket = tickets.find(ticket => ticket.id === selectedTicketId);

//   const handleSend = () => {
//     if (!reply.trim()) return;

//     const updated = tickets.map(ticket =>
//       ticket.id === selectedTicketId
//         ? { ...ticket, messages: [...ticket.messages, { name: 'Learner', message: reply }] }
//         : ticket
//     );

//     setTickets(updated);
//     setReply('');
//   };

//   const filteredTickets = tickets.filter(ticket =>
//   ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
// );

//   return (
//     <div style={styles.container}>
//        <div style={styles.wrapperBox}>
//       <Sidebar
//   tickets={filteredTickets}
//   selectedTicketId={selectedTicketId}
//   onSelect={setSelectedTicketId}
//   searchTerm={searchTerm}
//   setSearchTerm={setSearchTerm}
// />

//       <ChatPanel
//         selectedTicket={selectedTicket}
//         reply={reply}
//         setReply={setReply}
//         onSend={handleSend}
//       />
//     </div>
//     </div>
//   );
// };

// export default App;


import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import styles from './styles/styles';

const App = () => {
  // Load tickets from localStorage or use default
  const defaultTickets = [
    {
      id: '1',
      name: 'Login Issue',
      description: 'Cannot log in to the portal',
      date: '2025-07-13',
      time: '10:00',
      status: 'Pending',
      messages: [
        { name: 'Learner', message: 'I’m unable to log in.' },
        { name: 'Support', message: 'Try resetting your password.' },
      ],
    },
    {
      id: '2',
      name: 'Payment Failed',
      description: 'Transaction declined',
      date: '2025-07-12',
      time: '16:30',
      status: 'Unread',
      messages: [
        { name: 'Learner', message: 'Payment is failing repeatedly.' },
        { name: 'Support', message: 'Use a different card or method.' },
      ],
    },
  ];

  const [tickets, setTickets] = useState(() => {
    const stored = localStorage.getItem('tickets');
    return stored ? JSON.parse(stored) : defaultTickets;
  });

  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [reply, setReply] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedTicket = tickets.find((ticket) => ticket.id === selectedTicketId);

  // Persist tickets to localStorage whenever tickets update
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const handleSend = () => {
    if (!reply.trim()) return;

    const updated = tickets.map((ticket) =>
      ticket.id === selectedTicketId
        ? {
            ...ticket,
            messages: [...ticket.messages, { name: 'Learner', message: reply }],
          }
        : ticket
    );

    setTickets(updated);
    setReply('');
  };

    const filteredTickets = tickets.filter(ticket =>
  ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div style={styles.container}>
      <div style={styles.wrapperBox}>
       <Sidebar
  tickets={filteredTickets}
   selectedTicketId={selectedTicketId}
   onSelect={setSelectedTicketId}
   searchTerm={searchTerm}
   setSearchTerm={setSearchTerm}
 />
        <ChatPanel
          selectedTicket={selectedTicket}
          reply={reply}
          setReply={setReply}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default App;
