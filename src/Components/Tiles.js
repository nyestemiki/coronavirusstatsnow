import React from 'react';
import { Data } from '../Style';
import Tile from './Tile';

export default function({ data }) {
    return (
        <Data>
          <Tile 
            title="Confirmed" 
            number={data.confirmed?.value}/>

          <Tile 
            title="Recovered" 
            number={data.recovered?.value}/>
            
          <Tile 
            title="Deaths" 
            number={data.deaths?.value}/>
        </Data>
    )
}