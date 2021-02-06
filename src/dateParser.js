const defaultFormater = require("./defaultFormater");
const detectLanguage = require("./languages");

/**
 * Mendapatkan total waktu
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.1.2
 * @param {*} date string | object
 * @param {Inherit} app inherit
 */
const dateParser = (date = Date | String, app = Object) => {
  if (app.hasOwnProperty("language")) {
    app.message = detectLanguage(app.language);

    return typeof date === "string"
      ? new Date(defaultFormater(date, app.language, app.locale)).getTime()
      : date.getTime();
  } else {
    app.message = detectLanguage("id-ID");

    return typeof date === "string" ? new Date(date).getTime() : date.getTime();
  }
};

module.exports = dateParser;
