export default async () => 
    await fetch('https://covid19.mathdro.id/api/countries')
        .then(res => res.json())
        .then(data => data.countries);
