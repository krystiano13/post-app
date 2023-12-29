export function formatDate(dateText) {
    const date = new Date(dateText);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let monthText = "";

    if(month < 10) {
        monthText = `0${month}`;
    }
    else {
        monthText = month;
    }

    return `${year} - ${monthText} - ${day}`;
}