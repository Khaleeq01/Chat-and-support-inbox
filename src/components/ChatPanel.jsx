import React from 'react';
import styles from '../styles/styles';
import MessageBubble from './MessageBubble';

const ChatPanel = ({ selectedTicket, reply, setReply, onSend }) => {
  if (!selectedTicket) {
    return <p style={{ color: '#64748b' }}>🡐 Select a ticket to view conversation</p>;
  }

  return (
    <div style={styles.chatPanel}>
      <h2>{selectedTicket.name}</h2>
      <div style={styles.chatBox}>
        {selectedTicket.messages.map((msg, idx) => (
          <MessageBubble key={idx} name={msg.name} message={msg.message} />
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type your reply..."
          style={styles.input}
        />
        <button onClick={onSend} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default ChatPanel;
