import React from 'react';


export default function App() {

  return (
    <>
      <div id='main'>
        <h1>click me</h1>
        <button onClick={() => {
          electron.notificationApi.sendNotification('My custom notification!');
        }}>Notify</button>
      </div>
    </>
  )
}