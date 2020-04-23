export default async countryCode => 
    await fetch(`https://covid19.mathdro.id/api${countryCode ? `/countries/${countryCode}` : ''}`)
        .then(res => res.json());
