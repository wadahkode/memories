// Test menghitung waktu mundur
const memories = require('./memories.test');
const moment = new memories();

/**
 * Sistem Debugging
 *
 * Sembunyikan atau tampilkan error di terminal atau cmd
 *
 * @default false
 */
moment.set('isDebug', false);

/**
 * Pengaturan
 *
 * rekomendasi gunakan pengaturan daripada mengisi parameter
 * saat mendeklarasikan kelas, kecuali saat anda ingin lebih banyak membuat
 * kondisi waktu yang berbeda-beda.
 *
 * @param {*} name string
 * @param {*} value string | object | boolean
 */
moment.set('datetime', '3/10/2021, 00:00:00');
moment.set('language', 'id-ID');
moment.set('locale', {
  timeZone: 'Asia/Jakarta',
  hour12: false,
});

const countdown = moment.countdown();

console.log(countdown);
