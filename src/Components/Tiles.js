import React from 'react';
import { Data } from '../Style';
import Tile from './Tile';

export default function({ language, data }) {
    return (
        <Data>
          <Tile 
            title="Confirmed" 
            language={language}
            number={data.confirmed?.value}/>

          <Tile 
            title="Recovered" 
            language={language}
            number={data.recovered?.value}/>
            
          <Tile 
            title="Deaths" 
            language={language}
            number={data.deaths?.value}/>
        </Data>
    )
}