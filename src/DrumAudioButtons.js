import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const DrumAudioButtons = ({ id, name, source, audioClipId, playFunction, labelId}) => (
  <div className="col-4 align-self-center">
    
    <button 
      id={audioClipId} 
      className="btn btn-large btn-primary drum-pad" 
      onClick={() => playFunction(id, labelId, audioClipId)}>
      {name}
      <audio className="clip" id={id} src={source}></audio>
    </button>
  </div>
);

export default DrumAudioButtons;