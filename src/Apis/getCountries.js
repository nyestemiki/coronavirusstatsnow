export default async function() {
    const res = await fetch('https://covid19.mathdro.id/api/countries');
    const data = await res.json();

    return data.countries;
}