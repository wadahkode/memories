/**
 * Memories
 *
 * Mengubah waktu menjadi waktu moment
 *
 * Jika anda adalah seorang pengembang javascript pasti tidak akan asing dengan momentjs,
 * disini saya mencoba membuat dengan versi dari Indonesiaku tercinta.
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.0.0
 * @param {Date} start object
 * @param {Date} end object
 * @param {Language} lang string
 * @param {TimeZone} options object
 */
const Memories = function (start = {}, end = {}, lang = "", options = {}) {
  /**
   * Datetime Start
   *
   * Mendeklarasikan kelas new Date(args), args diperlukan disini.
   * args sendiri berguna untuk mengatur waktu mulai.
   *
   * @examples new Date(1/18/1991, 00:00:00)
   */
  this.start = start;

  /**
   * Datetime End
   *
   * Sama seperti properti this.start, hanya saja properti ini tidak memerlukan
   * arguments apapun, karena ini akan digunakan sebagai default dari waktu berakhirnya.
   *
   * @examples new Date()
   */
  this.end = end;

  /**
   * Current Datetime
   *
   * Hasil dari konversi this.start dan this.end, yang akan menyesuaikan waktu kapan dimulainya.
   *
   * @return String
   * @examples "1 detik yang lalu"
   */
  this.currentTime = "" || undefined;

  /**
   * Properti Day
   *
   * Akan berisi jumlah hari pada bulan ini.
   *
   * @return number
   * @examples 31
   */
  this.day = 0;

  /**
   * Properti Month
   *
   * Akan berisi bulan ini
   *
   * @return number
   * @examples 1
   */
  this.month = 0;

  /**
   * Properti Start To Locale Date String
   *
   * Akan berisi sebuah array dari hari, bulan, tahun sesuai dengan zona waktu saat ini.
   *
   * @return array ['1', '18', '1991']
   */
  this.stlds = setToLocaleDateString
    .apply(this, [start, lang, options])
    .split(/\//g);

  /**
   * Properti Start To Locale Time String
   *
   * Akan berisi sebuah array dari jam, menit, detik sesuai dengan zona waktu saat ini
   *
   * @return array ['00', '00', '00']
   */
  if (lang == "id-ID") {
    this.stlts = setToLocaleTimeString
      .apply(this, [start, lang, options])
      .replace(/\./g, ":")
      .split(/:| /);
  } else {
    this.stlts = setToLocaleTimeString
      .apply(this, [start, lang, options])
      .split(/:| /);
  }
};

/**
 * Mengatur waktu dari hari, bulan, tahun sesuai zona waktu saat ini
 *
 * @param {Date} date object
 * @param {Language} lang string
 * @param {Parameter} options object
 */
const setToLocaleDateString = function (date = {}, lang = "", options = {}) {
  return date.toLocaleDateString(
    lang ? lang : "en-US",
    options
      ? options
      : {
          timeZone: "Europe/London",
          hour12: false,
        }
  );
};

/**
 * Mengatur waktu dari jam, menit, detik sesuai zona waktu saat ini
 *
 * @param {Date} date
 * @param {Language} lang
 * @param {Parameter} options
 */
const setToLocaleTimeString = function (date = {}, lang = "", options = {}) {
  return date.toLocaleTimeString(
    lang ? lang : "en-US",
    options
      ? options
      : {
          timeZone: "Europe/London",
          hour12: false,
        }
  );
};

module.exports = Memories;
