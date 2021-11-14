import React, { useState, useEffect } from 'react';
import consumer from '../../channels/consumer';

export const ControlPanel = () => {
  const [users, setUsers] = useState(0);
  const [user, setUser] = useState('');

  useEffect(() => {
    consumer.subscriptions.create('MessageChannel', {

      connected() {
        console.log('connected')
      },

      disconnected() {

      },

      received(data) {
        console.log(data)
        setUsers(data.users)
        setUser(data.user)
      },
    })
  }, [])

  return (
    <>
      <div id="config">
        <h2>Panneau de contrôle</h2>
        <div class="conteneurPseudo">
        </div>
        <p id="displayPseudo">Salut {user} !</p>
        <p id="users">Il y a <span id="displayUsers">{users}</span> personne(s) connecté(e)(s)</p>
        <p id="start">Entrer dans la conversation</p>
        <p id="stop">Quitter la conversation</p>
      </div>
    </>
  )}
