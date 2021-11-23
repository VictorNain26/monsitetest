import React, { useState, useEffect } from 'react';
import consumer from '../../channels/consumer';


export const NewMessage = () => {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [placeholder, setPlaceholder] = useState('Message');

  const sendMessage = async (message) => {
    if (message.trim() === '') {
      setPlaceholder('Ton message est vide !');
    }
    else {
      await fetch(window.location.href, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content,
        },
        body: JSON.stringify({ message }),
      })
      setPlaceholder('Message');
    }
    setMessage('');
  }

  useEffect(() => {
    const chatbox = document.querySelector('#chatbox');

    consumer.subscriptions.create('MessageChannel', {

        connected() {
          chatbox.scrollTop = chatbox.scrollHeight;
        },

        disconnected() {
        },

        received(data) {
          setMessages(data.messages);
          chatbox.scrollTop = chatbox.scrollHeight;
        },
      })
  }, [messages])


  return (
    <>
      <div id='chat'>
        <div className='messages' id="chatbox">
          {
            messages.map((message) => (
              <div key={message.id}>[{message.time}] | {message.username}: `{message.content}`</div>
            ))
          }
        </div>
        <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? sendMessage(message) : null } type="text" required id="inputMessage" placeholder={placeholder} />
        <button onClick={() => sendMessage(message)}>Envoyer</button>
      </div>
    </>
  );
}
