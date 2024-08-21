export function daysPassedFromNow(dateString) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in time (in milliseconds) between the two dates
  const timeDifference = currentDate - inputDate;

  // Convert the time difference from milliseconds to days
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysPassed;
}
/* 
// Example usage:
const dateStr = '2024-06-28T17:04:23Z';
console.log(daysPassedFromNow(dateStr)); // Output will vary based on the current date */

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalizeFirstLetter(string) {
  if (!string) return string; // Check if string is empty or not
  return string.charAt(0).toUpperCase() + string.slice(1);
}
