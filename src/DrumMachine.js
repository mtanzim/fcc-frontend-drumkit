import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DrumAudioButtons from "./DrumAudioButtons";
import {bankOne} from "./audioBank";


const displayId = 'display';

const playAudio = (audioElemId, labelId, labelValue) => {
  // console.log(audioElemId);
  document.getElementById(audioElemId).play();
  document.getElementById(labelId).innerHTML = labelValue;
}

const DrumMachine = () => (
  <div id="drum-machine" className="col-sm-10 col-md-4">
    <div className="card">
      <div className="card-header bg-primary text-light">
        Freecodecamp Drum Machine
      </div>
      <div className="card-body">
          <div className="row justify-content-center align-items-center">
            <div id="" className="col-sm-12 col-md-12 align-self-center">
              <span id={displayId} class="badge badge-danger mb-4">Press a button</span>
            </div>
            <div className="col-sm-12 col-md-12 drumSection">
              <div className="row justify-content-center">
                {bankOne.map ( elem => {
                return <DrumAudioButtons 
                  id={elem.keyTrigger} 
                  key={elem.keyTrigger} 
                  name={elem.keyTrigger} 
                  audioClipId = {elem.id}
                  source={elem.url}
                  labelId={displayId}
                  playFunction={playAudio} />
                })}
              </div>
            </div>

          </div>
      </div>
    </div>
  </div>
);

export default DrumMachine;