import React from 'react';
import localization from '../Utils/localization';
import { Updated } from '../Style';

// Updated
export default ({ date }) => (
  <Updated>
    <span>{localization("Updated")}</span>
    <span id="date">{date}</span>
  </Updated>
)
