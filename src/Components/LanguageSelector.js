import React from 'react';
import { Languages } from '../Style';

export default function({ selectLanguage }) {
    const languages = ["en", "hu", "ro", "de"]

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