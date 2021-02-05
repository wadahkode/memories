/**
 * Default Formater
 *
 * @param {*} date date | string
 * @param {*} language string
 * @param {*} locale object
 */
const defaultFormater = (
  date = Date | String,
  language = String,
  locale = {}
) => {
  switch (language) {
    case "id-ID":
      let [day, month, year, ...his] = date
        .toLocaleString(language, locale)
        .match(/\d+/g);

      date = `${day}/${month}/${year}, ${his.join(":")}`;

      return date;

    case "en-US":
    default:
      return date;
  }
};

module.exports = defaultFormater;
