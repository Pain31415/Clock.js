export function getCurrentDate() {
    const today = new Date();
    const date = today.toLocaleDateString(); // Формат дати залежить від локалі
    return date;
}
