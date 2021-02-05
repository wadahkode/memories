/**
 * Output keluaran dalam bahasa indonesia
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.1.6
 */
module.exports = {
  /**
   * Mengatur output untuk hari kelahiran
   *
   * @param {*} point number
   * @param {*} output string | undefined
   */
  birthday: (point = Number, output = String | undefined) => ({
    y: `${point} ${output < 1 ? "tahun" : output}`,
    m: `${point} ${output < 1 ? "bulan" : output}`,
    d: `${point} ${output < 1 ? "hari" : output}`,
    w: `${point} ${output < 1 ? "minggu" : output}`,
    h: `${point} ${output < 1 ? "jam" : output}`,
    i: `${point} ${output < 1 ? "menit" : output}`,
    s: `${point} ${output < 1 ? "detik" : output}`,
    n: `${output < 1 ? "baru saja lahir" : output}`,
  }),
  /**
   * Mengatur output untuk timeAgo
   *
   * @param {*} point number
   * @param {*} output string
   */
  timeAgo: (point = Number, output = String | undefined) => ({
    y: `${point} ${output < 1 ? "tahun yang lalu" : output}`,
    m: `${point} ${output < 1 ? "bulan yang lalu" : output}`,
    d: `${point} ${output < 1 ? "hari yang lalu" : output}`,
    w: `${point} ${output < 1 ? "minggu yang lalu" : output}`,
    h: `${point} ${output < 1 ? "jam yang lalu" : output}`,
    i: `${point} ${output < 1 ? "menit yang lalu" : output}`,
    s: `${point} ${output < 1 ? "detik yang lalu" : output}`,
    n: `${output < 1 ? "baru saja" : output}`,
  }),
};
