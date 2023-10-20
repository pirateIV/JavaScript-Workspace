// The new Date constructor uses the  local time zone. So the only important thing  is to remember is that months starts from zero

// So February has number 1

// Here is an example with number as date components:

// new Date(year, months, date, hour, minute, second, millisecond)

// let d1 = new Date(2022, 5, 20, 4, 12)
// console.log(d1)

// let present = Date.now()
// console.log(present.toLocaleString())

// const currentDate = new Date()

// Create a specific date and time (year, month, days, hour, mins, seconds)
// const customDate = new Date(2023, 8, 25, 14, 30, 0);
// console.log(customDate);

// Working with Date Strings
// const dateString = "2023-09-25T13:30:00.000Z";
// const dateFromStr = new Date(dateString)
// common date initialization methods
// Gettting the current date and time
// const currentDate = new Date()
// console.log(currentDate)

// Creating date from a timeStamp
// const timestamp = 16322551400000; // ex
// const currentTime = new Date().getTime().toLocaleString();
// const currentDate = new Date().getDate();
// console.log(currentDate);
// console.log(currentTime);
// console.log(currentTime)
// function formatSeconds(secs) {

// }
// console.log(formatSeconds(currentTime))

// function formatDate(dayOfWeek, day, month, year) {
//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//   const months = [  "Jan",  "Feb",  "Mar",  "Apr",  "May",  "June",  "July",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec",
//   ];

//   return `${daysOfWeek[dayOfWeek]} ${months[month]} ${day} ${year}`;
// }
//Foo lives in a country with timezone GMT + 1
// const birthday = new Date(2000, 0, 1);
// console.log(`Foo was born on: ${formatDate(
//   birthday.getDay(),
//   birthday.getDate(),
//   birthday.getMonth(),
//   birthday.getFullYear()
// )}
// `);
// console.log(`Foo was born on: ${formatDate(
//   birthday.getUTCDay(),
//   birthday.getUTCDate(),
//   birthday.getUTCMonth(),
//   birthday.getUTCFullYear()
// )}
// `);

// Formatting and Displaying dates
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
console.log(formattedDate);

// The 'toLocalString()' method returns the string representation of the date and the time
// in a format that is appropriate for the user's locale

// console.log(formattedTime)
// This method returns only the date part of the Date object in localized format

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // Adding one because months are zero based
const day = date.getDate();

const todaysDate = `${month}/${day}/${year}`; // MM/DD/YY
console.log(todaysDate);

// Modifying date components
// chaning the year month or day
date.setFullYear(2000, 1, 8);
// date.setMonth(1, 8)
console.log(date.toLocaleString());
// changing the hour minute or second
date.setHours(11, 30, 30);
console.log(date.toString());

// DATE ARITHMETIC

const startDate = new Date("2023-09-25");
const endDate = new Date("2023-09-30");
// calculate the time difference in milliseconds
const timeDifference = endDate - startDate;
console.log(timeDifference);
// convert milliseconds to days

const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(`Number of days between the dates : ${daysDifference}`);

/**
 * timeDifference is the range in milliseconds btw startDate and endDate
 * so it is mulitplied by
 * 1000 millisecs - 1sec
 * 60 secs - 1 min
 * 60 min - i hr
 * 24 hrs - day
 *
 * by multiplying all you get the day in milliseconds
 * And when you divide the timeDiffference which is the difference btw the days
 * difference you get the numbers which the daysDifference
 */

// Section 6: Handling Timezones

/**
 Working with time zones is an important aspect
  of dealing with dates, especially in global applications
   where users may be in different parts of the world.
    JavaScript's Date object typically represents dates
     in the user's local time zone. However, you may need to convert
      dates between different time zones or display them in a specific time zone.
 
   To work with time zones, you can use libraries like Intl.DateTimeFormat or the luxon library, which provide more advanced timezone support.

*/


const options = {
  timeZone: 'America/New_York', // Specify the target time zone
}
const FormattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date())
console.log(FormattedDate)