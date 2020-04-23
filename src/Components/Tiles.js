import React from 'react';
import { Data } from '../Style';
import { Tile } from '.';

// Tiles
export default ({ data: { confirmed, recovered, deaths} }) => (
  <Data>
    <Tile title="Confirmed" number={confirmed?.value}/>
    <Tile title="Recovered" number={recovered?.value}/>
    <Tile title="Deaths" number={deaths?.value}/>
  </Data>
)
