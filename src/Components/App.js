import React, { useState, useEffect } from 'react';
import { Style, Top } from '../Style';
import { formatDate } from '../Utils/format';
import CountrySelector from './CountrySelector';
import LanguageSelector from './LanguageSelector';
import Tiles from './Tiles';
import Updated from './Updated';

export default function() {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState({});
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("en");

  const selectCountry = (countryCode) => {
    if (countryCode === 'world') {
      fetch('https://covid19.mathdro.id/api')
        .then(res => res.json())
        .then(data => setData(data));
    } else {
      fetch(`https://covid19.mathdro.id/api/countries/${countryCode}`)
        .then(res => res.json())
        .then(data => setData(data));
    }

    setDate( formatDate(new Date()) );
  }

  useEffect(() => {
    fetch('https://covid19.mathdro.id/api')
      .then(res => res.json())
      .then(data => setData(data));

    fetch('https://covid19.mathdro.id/api/countries')
      .then(res => res.json())
      .then(data => setCountries(data.countries));

    setDate( formatDate(new Date()) );
  }, []);

  if (data.length === 0 || countries.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <Style>
      <Top>
        <CountrySelector selectCountry={selectCountry} language={language} countries={countries}/>
        <LanguageSelector selectLanguage={setLanguage}/>
      </Top>

      <Tiles language={language} data={data}/>

      <Updated language={language} date={date}/>
    </Style>
  );
}
