import React from 'react';
import { Languages } from '../Style';

// LanguageSelector
export default ({ selectLanguage }) => {
    const languages = ["en", "hu", "ro", "de"];

    return (
        <Languages>
            {languages.map(language => (
                <img 
                    data-lang={language} 
                    key={language}
                    alt={language} 
                    src={`/imgs/${language}.jpg`}  
                    onClick={() => selectLanguage(language)}/>
            ))}
        </Languages>
    );
}