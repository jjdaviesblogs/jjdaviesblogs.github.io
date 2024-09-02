// `date` - String
function strDatetoDate(date) {
    const [datePart, timePart] = date.split(" ")
    const [day, month, year] = datePart.split('/');
    const [hours, minutes] = timePart.split(':');

    const dateObject = new Date(year, month-1, day, hours, minutes);
    return dateObject;
}

// `input` - Date Object
function calculateTimeDifference(input) {
    if (!input) {
        alert("Please enter a date and time.");
        return;
    }

    const enteredDate = new Date(input);
    const currentDate = new Date();

    if (enteredDate > currentDate) {
        alert("The input date and time must be in the past.");
        return;
    }

    const diffInMilliseconds = currentDate - enteredDate;
    
    // Convert milliseconds to different time units
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // if the difference is over 60 minutes, and over 24 hours, show how many days ago it was posted
    if ((diffInMinutes % 60 >= 60) && (diffInHours % 24) >= 24) {
        return `Posted ${diffInDays} days ago`
    }
    // if the difference is over 60 minutes, but less than 24 hours, show how many hours ago it was posted
    else if ((diffInMinutes % 60 >= 60) && (diffInHours % 24) < 24) {
        return `Posted ${diffInHours % 24} hours ago`
    // otherwise, show how many minutes ago it was posted
    } else {
        return `Posted ${diffInMinutes % 60} minutes ago`
    }
}