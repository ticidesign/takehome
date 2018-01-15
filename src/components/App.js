import React, { Component } from 'react';
import Main from '../styles/main';
import TileContainer from './TileContainer';


export default class App extends Component {
  render() {
    return (
      <Main>
        <TileContainer image="tile.jpg" title="Home and Away" />
      </Main>
    );
  }
}


