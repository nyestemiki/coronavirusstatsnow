import React, { useContext } from 'react';
import LanguageContext from '../Context/LanguageContext';
import { localization } from '../Utils/localization';
import { Updated } from '../Style';

export default function({ date }) {
    const language = useContext(LanguageContext);

    return (
        <Updated>
          <span>{localization("Updated", language) || "Updated"}</span>
          <span>{date}</span>
        </Updated>
    )
}