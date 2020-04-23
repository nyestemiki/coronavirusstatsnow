import React from 'react';
import localization from '../Utils/localization';
import { formatNumber } from '../Utils/format';
import { DataContainer, Number, Title } from '../Style';

// Tile
export default ({ title, number }) => (
    <DataContainer>
        <Number>{formatNumber(number)}</Number>
        <Title>{localization(title)}</Title>
    </DataContainer>
)
