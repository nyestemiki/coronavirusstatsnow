import { useContext } from 'react';
import LanguageContext from '../Context/LanguageContext';
import localizationData from '../localizationData';

// Returns the word in the landuage
// Returns the given word if it is not available in the fiven language 
export default function(word) {
    const language = useContext(LanguageContext);
    
    return (localizationData[word] && localizationData[word][language]) ?? word;
}
