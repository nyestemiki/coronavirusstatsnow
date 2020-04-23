// Returns a string with commas separating every three number
export const formatNumber = (number = '') => 
    number
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

// Returns the date as d/m/y hh:mm
export const formatDate = date => {
    const monthDayYear = date.toLocaleDateString();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return (
        monthDayYear + " " + 
        hour + ":" + (minute > 9 ? minute : "0" + minute)
    );
}
