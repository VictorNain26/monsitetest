import React, { useState, useEffect } from 'react';
import consumer from '../../channels/consumer';
import { VideoGrid } from './video';

export const ControlPanel = () => {
  const [users, setUsers] = useState(0);
  const user = document.querySelector('#tchatbox').dataset.user;

  useEffect(() => {
    consumer.subscriptions.create('ControlPannelChannel', {

      connected() {
      },

      disconnected() {
      },

      received(data) {
        console.log(data)
        setUsers(data.users)
      },
    })
  }, [users])

  return (
      <div id="config">
        <h2>Panneau de contrôle</h2>
        <p id="displayPseudo">Salut {user} !</p>
        <p id="users">Il y a <span id="displayUsers">{users}</span> personne{users > 1 ? 's' : ''} connecté{users > 1 ? 's' : ''}</p>
        <VideoGrid />
      </div>
  );
}
