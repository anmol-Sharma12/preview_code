import React from 'react';

const Message = ({ text }) => {
  return (
    <div style={{ padding: '10px', fontSize: '1.2rem', color: '#333' }}>
      <strong>Message:</strong> {text}
    </div>
  );
};

export default Message;
