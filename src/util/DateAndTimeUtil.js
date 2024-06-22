import moment from "moment";

/**
 * Formats a date to the format "Friday 20 Jun".
 *
 * @param {Date|string|number} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatNowDate() {
  const now = new Date();
  const options = { weekday: "long", day: "numeric", month: "short" };
  return new Date(now).toLocaleDateString("en-GB", options);
}

/**
 * A function that formats a date string into a specified format.
 *
 * @param {string} dateString - The date string to be formatted.
 * @param {string} [format="DD MMM"] - The format to apply to the date string.
 * @return {string} The formatted date string.
 */
export function dateFormatter(dateString, format = "DD MMM") {
  const dateObject = moment(dateString, "YYYY-MM-DD HH:mm:ss");
  const formattedDate = dateObject.format(format);
  return formattedDate;
}

/**
 * Filters the given API response to only include the days that are on or after tomorrow and have the specified target time.
 *
 * @param {Array} apiResponse - The API response to filter.
 * @param {string} [targetTime="06:00:00"] - The target time to filter by.
 * @return {Array} The filtered API response.
 */
export function filterDaysByTime(apiResponse, targetTime = "06:00:00") {
  const tomorrow = moment().add(1, "day").startOf("day"); // Get start of tomorrow
  const filteredDays = [];
  apiResponse.forEach((obj) => {
    const objDate = moment(obj.dt_txt); // Parse dt_txt date as moment object
    if (
      objDate.isSameOrAfter(tomorrow) &&
      objDate.format("HH:mm:ss") === targetTime
    ) {
      filteredDays.push(obj);
    }
  });

  return filteredDays;
}

export function timeFotmatter(unixTimestamp) {
  const formattedTime = moment.unix(unixTimestamp).format("hh:mm A");
  return formattedTime;
}
