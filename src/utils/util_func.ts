export function formatNumber(num:number) {
    if (num >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'; // Convert to millions
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'; // Convert to thousands
    } else {
        return num.toString(); // Return as is for numbers less than 1000
    }
}