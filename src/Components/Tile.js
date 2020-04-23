import React from 'react';
import localization from '../Utils/localization';
import { DataContainer, Number, Title } from '../Style';
import CountUp from 'react-countup';

// Tile
export default ({ title, number }) => (
    <DataContainer>
        <Number>
            <CountUp start={0} end={number ?? 0} delay={0} duration={1} separator=",">
            {({ countUpRef }) => <div><span ref={countUpRef}/></div>}
            </CountUp>
        </Number>
        <Title>{localization(title)}</Title>
    </DataContainer>
)
