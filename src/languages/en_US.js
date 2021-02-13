/**
 * Output keluaran dalam bahasa inggris
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
    y: `${point} ${output < 1 ? 'year' : output}`,
    m: `${point} ${output < 1 ? 'month' : output}`,
    d: `${point} ${output < 1 ? 'day' : output}`,
    w: `${point} ${output < 1 ? 'week' : output}`,
    h: `${point} ${output < 1 ? 'hour' : output}`,
    i: `${point} ${output < 1 ? 'minute' : output}`,
    s: `${point} ${output < 1 ? 'second' : output}`,
    n: `${output < 1 ? 'just born' : output}`,
  }),
  /**
   * Mengatur output untuk timeAgo
   *
   * @param {*} point number
   * @param {*} output string
   */
  timeAgo: (point = Number, output = String | undefined) => ({
    y: `${point} ${output < 1 ? 'year ago' : output}`,
    m: `${point} ${output < 1 ? 'month ago' : output}`,
    d: `${point} ${output < 1 ? 'day ago' : output}`,
    w: `${point} ${output < 1 ? 'week ago' : output}`,
    h: `${point} ${output < 1 ? 'hour ago' : output}`,
    i: `${point} ${output < 1 ? 'minute ago' : output}`,
    s: `${point} ${output < 1 ? 'second ago' : output}`,
    n: `${output < 1 ? 'just now' : output}`,
  }),
};
