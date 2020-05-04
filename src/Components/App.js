import React, { useState, useEffect } from 'react';
import LanguageContext from '../Context/LanguageContext';
import Style, { Top } from '../Style';
import { formatDate } from '../Utils/format';
import { getData, getCountries}  from '../Apis';
import { CountrySelector, LanguageSelector, Tiles, Updated } from '.'; // components

// App
export default function() {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState({});
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("en");

  // Changes the data to the selected country's stats
  // Global stats if no country specified
  async function selectCountry(countryCode) {
    setData(
      (countryCode === 'world') 
        ? await getData() 
        : await getData(countryCode)
    );

    // Actualizing the date of latest update
    setDate( 
      formatDate(new Date()) 
    );
  }

  // Loading the data on mount
  useEffect(() => {
    // Retrieving global stats and countries
    (async function loadAllData() {
      setData(await getData());
      setCountries(await getCountries());
    })();

    // Actualizing the date of latest update
    setDate( 
      formatDate(new Date())
    );
  }, []); // No updates

  return (
    <LanguageContext.Provider value={language}>
      <Style>
        <Top>
          <CountrySelector countries={countries} selectCountry={selectCountry}/>
          <LanguageSelector selectLanguage={setLanguage}/>
        </Top>
        <Tiles data={data}/>
        <Updated date={date}/>
      </Style>
    </LanguageContext.Provider>
  );
}
