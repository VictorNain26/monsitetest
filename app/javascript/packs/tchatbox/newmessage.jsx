import React, { useState, useEffect } from 'react';
import consumer from '../../channels/consumer';

const sendMessage = async (e) => {
  const message = e.target.value
  e.preventDefault()
  await fetch('http://localhost:3000/tchatboxs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content,
    },
    body: JSON.stringify({ message }),
  })
  e.target.value = '';
}

export const NewMessage = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    consumer.subscriptions.create('MessageChannel', {

      connected() {
        console.log('connected')
      },

      disconnected() {

      },

      received(data) {
        setMessages(data.messages)
      },
    })
  }, [])

  return (
    <>
      <div className='messages' id="chatbox">
        {
          messages.map((message) => (
            <div key={message.id}>{message.content}</div>
          ))
        }
      </div>
      <input onKeyDown={(e) => e.key === 'Enter' ? sendMessage(e) : null } type="text" required id="inputMessage" placeholder="Message" />
    </>
  );


}
