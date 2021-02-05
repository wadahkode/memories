/**
 * Mendeteksi bahasa yang digunakan
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.1.6
 * @param {*} language string
 */
const detectLanguage = (language = String | "id-ID") => {
  language = language.match(/-/g) ? language.replace(/-/g, "_") : language;
  return require(`./${language}`);
};

module.exports = detectLanguage;
