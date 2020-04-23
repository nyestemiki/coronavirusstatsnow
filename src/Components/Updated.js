import React, { useContext } from 'react';
import LanguageContext from '../Context/LanguageContext';
import { Updated } from '../Style';
import { localization } from '../Utils/localization';

export default function({ date }) {
    const language = useContext(LanguageContext);

    return (
        <Updated>
          <span>{localization("Updated", language) || "Updated"}</span>
          <span>{date}</span>
        </Updated>
    )
}