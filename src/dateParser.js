/**
 * Mendapatkan total waktu
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.1.2
 * @param {*} date string | object
 */
const dateParser = (date = Date | String) => {
  let datetime, timestamp;
  let parsed = undefined;

  if (typeof date === "string") {
    parsed = new Date(date);
  } else {
    parsed = date;
  }
  return parsed.getTime();
};

module.exports = dateParser;
