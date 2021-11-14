import React, { useState, useEffect } from 'react';
import consumer from '../../channels/consumer';

export const ControlPanel = () => {
  const [users, setUsers] = useState(0);
  const [user, setUser] = useState("");
  let i = 1;

  useEffect(() => {
    consumer.subscriptions.create('ControlPannelChannel', {

      connected() {
        console.log('connected')
      },

      disconnected() {
      },

      received(data) {
        console.log(data.users)
        setUsers(data.users)
        if (i <= 1) {
          setUser(data.user)
          i++
        }
      },
    })
  }, [])

  return (
      <div id="config">
        <h2>Panneau de contrôle</h2>
        <p id="displayPseudo">Salut {user} !</p>
        <p id="users">Il y a <span id="displayUsers">{users}</span> personne{users > 1 ? 's' : ''} connecté{users > 1 ? 's' : ''}</p>
      </div>
  )}
