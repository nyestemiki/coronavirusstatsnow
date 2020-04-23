import React, { useContext } from 'react';
import LanguageContext from '../Context/LanguageContext';
import { localization } from '../Utils/localization';
import { formatNumber } from '../Utils/format';
import { DataContainer, Number, Title } from '../Style';

export default function({ title, number }) {
    const language = useContext(LanguageContext);
    
    return (
        <DataContainer>
            <Number>{formatNumber(number)}</Number>
            <Title>{localization(title, language) || title}</Title>
        </DataContainer>
    )
}