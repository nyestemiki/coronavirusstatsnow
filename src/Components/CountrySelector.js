import React, { useContext} from 'react';
import LanguageContext from '../Context/LanguageContext';
import { Select } from '../Style';
import { localization } from '../Utils/localization';

export default function({ countries, selectCountry }) {
    const language = useContext(LanguageContext);

    return (
        <Select id="countySelector" onChange={event => 
            selectCountry(event.target[event.target.selectedIndex].value)
        }>
            <option key="world" value="world">
                {localization("World", language) || "World"}
            </option>

            {Array
                .from(countries)
                .map(({ name, iso2 }) => 
                    iso2 && <option value={iso2} key={iso2}>{name}</option>
            )}
        </Select>
    );
}