
//retrurns current date in format: MM-DD-YYYY
const getDateString = (date: Date): string => {
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

export {
    getDateString
}