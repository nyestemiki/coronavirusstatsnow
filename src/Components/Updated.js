import React from 'react';
import { Updated } from '../Style';
import { localization } from '../Utils/localization';

export default function({ language, date }) {
    return (
        <Updated>
          <span>{localization("Updated", language) || "Updated"}</span>
          <span>{date}</span>
        </Updated>
    )
}