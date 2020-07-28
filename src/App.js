import React from 'react';

import './App.css';
import Profile from './profile/Profile'

const App = () => {
    const handleName = e => {
      e.preventDefault();
      alert("Fawzi Saidi");
    }
  return <Profile fullname="Very mysterious name" bio="I am a Photographer" profession="Photographer, what do u mean?" handleName={handleName} >
    <img src='./assets/profilePhoto.jpg' alt="photo de profil" />
    </Profile>

};

export default App