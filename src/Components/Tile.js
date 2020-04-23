import React from 'react';
import { localization } from '../Utils/localization';
import { DataContainer, Number, Title } from '../Style';
import { formatNumber } from '../Utils/format';

export default function({ title, number, language }) {
    return (
        <DataContainer>
            <Number>{formatNumber(number)}</Number>
            <Title>{localization(title, language) || title}</Title>
        </DataContainer>
    )
}