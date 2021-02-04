const dateParser = require("./dateParser");

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
 */
class Memories {
  /**
   * @param {*} prop Object | Array
   */
  constructor(prop = Object | Array | undefined, isDebug = true) {
    this.isDebug = isDebug;
    this.prop = prop;

    if (prop instanceof Array && prop.length >= 1) {
      prop.map((item, key) => (this[key] = item));
    } else if (prop instanceof Object) {
      for (let name in prop) {
        this[name] = prop[name];
      }
    } else {
      return this.execute(isDebug);
    }
  }

  /**
   * Mencetak waktu menjadi waktu yang sudah berlalu,
   * jika kedua parameter dikosongkan, maka sistem akan menjalankan pengaturan bawaan.
   *
   * @param {*} prefix string
   * @param {*} suffix object
   */
  timeAgo(prefix = "", suffix = {}) {
    const periode = dateParser(new Date());
    const unPeriode = dateParser(this.datetime);
    const second = 1000,
      minute = 60 * second,
      hour = 60 * minute,
      day = hour * 24,
      week = day * 7,
      month = day * 30,
      year = day * 365;

    const moment = (point, name) => {
      const label = {
        h: `${point} ${prefix !== "birthday" ? "hour ago" : suffix[name]}`,
        i: `${point} ${prefix !== "birthday" ? "minute ago" : suffix[name]}`,
        s: `${point} ${prefix !== "birthday" ? "second ago" : suffix[name]}`,
        y: `${point} ${prefix !== "birthday" ? "year ago" : suffix[name]}`,
        m: `${point} ${prefix !== "birthday" ? "month ago" : suffix[name]}`,
        d: `${point} ${prefix !== "birthday" ? "day ago" : suffix[name]}`,
        w: `${point} ${prefix !== "birthday" ? "week ago" : suffix[name]}`,
        n: `${point < 1 && prefix !== "birthday" ? "baru saja" : suffix[name]}`,
      };
      return label[name];
    };

    const timeNow = periode > unPeriode && periode - unPeriode;

    const parsed =
      timeNow <= Math.floor(second * 1.5)
        ? moment(Math.floor(timeNow / second), "n")
        : timeNow > second && timeNow < minute
        ? moment(Math.floor(timeNow / second), "s")
        : timeNow > second && timeNow > minute && timeNow < hour
        ? moment(Math.floor(timeNow / minute), "i")
        : timeNow > minute && timeNow > hour && timeNow < day
        ? moment(Math.floor(timeNow / hour), "h")
        : timeNow > hour && timeNow > day && timeNow < week
        ? moment(Math.floor(timeNow / day), "d")
        : timeNow > day && timeNow > week && timeNow < month
        ? moment(Math.floor(timeNow / week), "w")
        : timeNow > week && timeNow > month && timeNow < year
        ? moment(Math.floor(timeNow / month), "m")
        : timeNow > month && timeNow > year
        ? moment(Math.floor(timeNow / year), "y")
        : Infinity;

    return parsed;
  }

  /**
   * Untuk memberi pesan kesalahan jika properti kelas tidak diisi
   * dan sistem debug telah dinyalakan
   *
   * @param {*} isDebug boolean
   */
  execute(isDebug = false) {
    if (isDebug) {
      if (this.prop instanceof Array && this.prop.length >= 1) {
        delete this.prop;
        return this;
      } else if (this.prop instanceof Object) {
        delete this.prop;
        return this;
      } else {
        return this;
      }
    } else {
      return this;
    }
  }

  get get() {}

  /**
   * Getter
   *
   * Fungsi untuk mendapatkan property
   *
   * @param {String} name string
   */
  get(name = String) {
    return this[name];
  }

  /**
   * Mengatur property yang akan ditambahkan
   *
   * @param {*} value object | string | boolean | undefined
   */
  set set(value = Date | String | Boolean | undefined) {
    return value;
  }

  /**
   * Setter
   *
   * Fungsi untuk mengatur property
   *
   * @param {String|undefined} name string | undefined
   * @param {String|Object} value object | string | boolean | undefined
   */
  set(name = String | undefined, value = Date | String | Boolean | undefined) {
    const warning = {
      noProp:
        "\nWarning: Parameter diperlukan, kamu dapat mengaturnya dengan menggunakan metode memories.set(name, value)\n",
      isFunction:
        "\nWarning: Parameter dengan tipe [Function] tidak dapat diterima!\n",
    };

    switch (name) {
      case "isDebug":
        if (value === true) {
          delete this.prop;
          console.log(
            this.hasOwnProperty("datetime") === false ? warning.noProp : this
          );
        } else {
          delete this.prop;
        }
        break;

      default:
        if (typeof value === "function") {
          console.warn(warning.isFunction);
          return this;
        } else {
          return (this[name] = value);
        }
    }
  }
}

module.exports = Memories;
