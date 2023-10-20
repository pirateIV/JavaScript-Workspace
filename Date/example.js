/**
 
 * Example 1: Formatting and Displaying Dates
 * Task: Create a function that takes a date object and returns
 * a user-friendly date string in the format "Month Day, Year."
 */

// function formatDate(date) {
  // const options = { year: 'numeric', month: 'long', day: 'numeric' }
// }

// let date = new Date();
// const formattedDate = date.toLocaleString("en-US", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });

// console.log(formattedDate)

// Example

function formatTimeZone(date, timeZone) {
  const options = { timeZone: timeZone, year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleString('en-US', options)
}

const date = new Date("2023-09-25T14:30:00Z"); // Date in UTC
const targetTimeZone = 'America/New_York';
console.log(formatTimeZone(date, targetTimeZone))

function birthdayCountdown(startDate, endDate) {

}

const startDate = '2023'