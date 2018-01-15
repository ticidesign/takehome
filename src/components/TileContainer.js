import React from 'react';
import Tile from '../styles/tile';
import TileWrapper from '../styles/tilewrapper';
import Info from '../styles/info';
import Logo from '../styles/logo';
import H2 from '../styles/h2';

// Statless Functional Component
const TileContainer = (props) => {
  return (
    <TileWrapper>
      <Tile src={props.image} alt={props.title} />
      <Info>
        <Logo src="logo.svg" alt="Seven Network" />
        <H2>{props.title}</H2>
      </Info>
    </TileWrapper>
  );
}

export default TileContainer;
