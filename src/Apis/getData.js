export default async function(countryCode=false) {
    let res = null;

    if (!countryCode) {
        res = await fetch('https://covid19.mathdro.id/api');
    } else {
        res = await fetch(`https://covid19.mathdro.id/api/countries/${countryCode}`);
    }

    return await res.json();
}