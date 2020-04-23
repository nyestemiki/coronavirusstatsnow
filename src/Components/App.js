import React, { useState, useEffect } from 'react';
import LanguageContext from '../Context/LanguageContext';
import { Style, Top } from '../Style';
import { formatDate } from '../Utils/format';
import { getData, getCountries}  from '../Apis';
import { CountrySelector, LanguageSelector, Tiles, Updated } from '.';

export default function() {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState({});
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("en");

  async function selectCountry(countryCode) {
    let newData = null;
    
    if (countryCode === 'world') {
      newData = await getData();
    } else {
      newData = await getData(countryCode);
    }
    
    setData(newData);

    setDate( formatDate(new Date()) );
  }

  useEffect(() => {
    async function loadAllData() {
      setData(await getData());

      setCountries(await getCountries());
    }

    loadAllData();

    setDate( formatDate(new Date()) );
  }, []);

  if (data.length === 0 || countries.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <LanguageContext.Provider value={language}>
      <Style>
        <Top>
          <CountrySelector selectCountry={selectCountry} countries={countries}/>
          <LanguageSelector selectLanguage={setLanguage}/>
        </Top>
        <Tiles data={data}/>
        <Updated date={date}/>
      </Style>
    </LanguageContext.Provider>
  );
}
