import localizationData from '../localizationData';

export const localization = (word, language) => 
    localizationData[word] && localizationData[word][language];
