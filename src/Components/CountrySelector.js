import React from 'react';
import { Select } from '../Style';
import localization from '../Utils/localization';

// CountrySelector
export default ({ countries, selectCountry }) => {
    function handleSelect(event) {
        const selector = event.target;
        const index = event.target.selectedIndex;
        
        selectCountry(selector[index].value);
    }

    return (
        <Select id="countySelector" onChange={handleSelect}>
            <option key="world" value="world">
                {localization("Around the World")}
            </option>

            {Array.from(countries).map(({ name, iso2 }) => 
                iso2 && <option value={iso2} key={iso2}>{name}</option>
            )}
        </Select>
    );
}