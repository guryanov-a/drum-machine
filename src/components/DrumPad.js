import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 30px;
`;

export default ({ id, src, keyboardKey, onClick, name }) => {
  const keyboardKeyText = keyboardKey.toUpperCase();
  

  const handleClick = (e) => {
    // play audio
    const audio = e.target.querySelector('audio');
    audio.currentTime = 0;
    audio.play();

    // change displayed name
    onClick(name);
  }

  return (
    <button id={ id } className="drum-pad" onClick={handleClick}>
      <Text className="text">{ keyboardKeyText }</Text>
      <audio id={ keyboardKeyText } className="clip" src={`${process.env.PUBLIC_URL}sounds/${src}`} crossOrigin="anonymous" />
    </button>
  );
};