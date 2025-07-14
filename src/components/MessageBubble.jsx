import styles from '../styles/styles';

const MessageBubble = ({ name, message }) => {
  return (
    <div style={styles.message(name)}>
      <div style={styles.messageBubble(name)}>
        <strong>{name}:</strong> {message}
      </div>
    </div>
  );
};

export default MessageBubble;
