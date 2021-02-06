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
moment.set('datetime', '8/18/1991, 05:30:30');
//! Belum digunakan
moment.set('language', 'id-ID');
moment.set('locale', {
  timeZone: 'Asia/Jakarta',
  hour12: false,
});
//! Jangan mengatur function dengan metode set, contoh kesalahan:
// moment.set("test", function () {});
//! Jika debug dinyalakan ini akan memberikan laporan error, kenapa program tidak dapat berjalan?

const data = {
  nama: 'Ayus Irfang Filaras',
  //? Tetapkan keluaran sebagai hari kelahiran atau waktu yang sudah berlalu.
  // umur: moment.timeAgo(),
  umur: moment.timeAgo('birthday'),
};

console.log('Nama: %s\nUmur: %s', data.nama, data.umur);
console.log(`Sudah ${moment.delta('month')} bulan berlalu sejak lahir`);

console.log('\n------ Test Timeout 2 seconds ------');

let sec2 = new memories({ datetime: new Date() });
setTimeout(() => {
  let result = sec2.delta('second');

  if (result === 2) {
    console.log('✔️ %s', ' memories.delta seems OK.');
  } else {
    console.log('❌ %s', ' Expected 2 but got ' + result);
  }
}, 2000);

module.exports = memories;
