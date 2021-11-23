import React, { useRef, useState, useEffect } from 'react';
import consumer from '../../channels/consumer';

export const VideoGrid = () => {
  const [buttonuservideo, setButtonUserVideo] = useState('Allumer son retour');
  const [buttonvideo, setButtonVideo] = useState('Rejoindre la conversation');
  const videos = useRef(null);

  const startUserVideo = () => {
    setButtonUserVideo('Eteindre son retour');
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    }).then((stream) => {
      videos.current.srcObject = stream;
      videos.current.onloadedmetadata = () => {
        videos.current.play();
      };
      });
  }

  const startVideo = () => {
    setButtonVideo('Quitter la conversation');
  }

  const stopVideo = () => {
    setButtonVideo('Rejoindre la conversation');
  }

  useEffect(() => {
    consumer.subscriptions.create('VideoChannel', {

      connected() {
      },

      disconnected() {
      },

      received() {

      },
    })
  }, [])

  const Video = () => {
    return (
      <video autoPlay controls className='userVideo' ref={videos}></video>
    )
  }

  return (
    <>
      <div id="userCam">
        <div id="myVideo"><Video /></div>
        <input type='button' value={buttonuservideo} id="userCamButton" onClick={() => buttonuservideo === 'Allumer son retour' ? startUserVideo() : setButtonUserVideo('Allumer son retour') }></input>
      </div>
      <input type="button" value={buttonvideo} onClick={() => buttonvideo === 'Rejoindre la conversation' ? startVideo() : stopVideo()}></input>
    </>
  )
}
