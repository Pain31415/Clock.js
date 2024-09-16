export function getCurrentTime() {
    const today = new Date();
    const time = today.toLocaleTimeString(); // Формат часу залежить від локалі
    return time;
}
