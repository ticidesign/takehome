import React, { Component } from 'react';
import Main from '../styles/main';
import TileContainer from './TileContainer';

export default class App extends Component {
  render() {
    return (
      /* Assuming we will have many tiles in a page or widget i'm passing props
      to a stateless compoment */
      <Main>
        <TileContainer image="tile.jpg" title="Home and Away" />
      </Main>
    );
  }
}


