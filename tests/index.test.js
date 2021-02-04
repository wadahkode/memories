const memories = require("./memories.test");
const moment = new memories();

/**
 * Sistem Debugging
 *
 * Sembunyikan atau tampilkan error di terminal atau cmd
 *
 * @default false
 */
moment.set("isDebug", false);

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
moment.set("datetime", "8/18/1991, 05:30:30");
//! Belum digunakan
moment.set("language", "id-ID");
moment.set("locale", {
  timeZone: "Asia/Jakarta",
  hour12: false,
});
//! Jangan mengatur function dengan metode set, contoh kesalahan:
// moment.set("test", function () {});
//! Jika debug dinyalakan ini akan memberikan laporan error, kenapa program tidak dapat berjalan?

const data = {
  nama: "Ayus Irfang Filaras",
  //? Tetapkan keluaran sebagai hari kelahiran atau waktu yang sudah berlalu.
  // umur: moment.timeAgo(),
  umur: moment.timeAgo("birthday", {
    y: "tahun",
    m: "bulan",
    d: "hari",
    w: "minggu",
    h: "jam",
    i: "menit",
    s: "detik",
    n: "baru saja",
  }),
};

console.log("Nama: %s\nUmur: %s", data.nama, data.umur);

// export
module.exports = memories;
