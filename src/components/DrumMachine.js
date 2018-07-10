import React, { Component } from 'react';
import DrumPad from './DrumPad';
import styled from 'styled-components';

const sounds = [
  {
    name: 'Clap',
    keyboardKey: 'q',
    src: 'SampleMagic_tr808_clap.wav',
  },
  {
    name: 'Clave',
    keyboardKey: 'w',
    src: 'SampleMagic_tr808_clave.wav',
  },
  {
    name: 'Closed hat',
    keyboardKey: 'e',
    src: 'SampleMagic_tr808_closedhat_01.wav',
  },
  {
    name: 'Rimshot',
    keyboardKey: 'a',
    src: 'SampleMagic_tr808_rimshot.wav',
  },
  {
    name: 'Snare',
    keyboardKey: 's',
    src: 'SampleMagic_tr808_snare_14.wav',
  },
  {
    name: 'Tom',
    keyboardKey: 'd',
    src: 'SampleMagic_tr808_tom_08.wav',
  },
  {
    name: 'Kick 1',
    keyboardKey: 'z',
    src: 'SampleMagic_tr808_kick_01.wav',
  },
  {
    name: 'Kick 2',
    keyboardKey: 'x',
    src: 'SampleMagic_tr808_kick_03.wav',
  },
  {
    name: 'Kick 3',
    keyboardKey: 'c',
    src: 'SampleMagic_tr808_kick_11.wav',
  },
];

const DrumMachineStyled = styled.div`
  padding: 50px 0;
`;

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

const DrumPads = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: 200px;
  grid-gap: 30px;
  grid-auto-flow: row;
  grid-auto-rows: 200px;
  margin-bottom: 30px;
`;

const Display = styled.div`
  text-align: center;
`;

class DrumMachine extends Component {
  state = {
    currentSound: null,
  }

  soundChange = (newSound) => {
    this.setState({
      currentSound: newSound,
    });
  }

  handleKeyDown = (e) => {
    const key = e.key;
    const audioBtn = document.getElementById(`drum-pad-${key}`);

    if (audioBtn) {
      var clickEvent = new Event('click', { bubbles: true });
      audioBtn.dispatchEvent(clickEvent);
    }
  }

  render() {
    const drumPads = sounds.map((sound) => {
      const id = `drum-pad-${sound.keyboardKey}`.replace('.', '_');

      return (<DrumPad onClick={this.soundChange} key={id} id={id} { ...sound } />);
    });

    return (
      <Container>
        <DrumMachineStyled id="drum-machine">
          <DrumPads>
            {drumPads}
          </DrumPads>
          <Display id="display">{ this.state.currentSound }</Display>
        </DrumMachineStyled>
      </Container>
    );
  }

  componentDidMount() {
    // free code camp test suite
    const $script = require('scriptjs');

    $script('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js');

    // add keydown event
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // remove keydown event
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

export default DrumMachine;
