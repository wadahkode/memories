const memories = require("../src/memories");
const options = {
  datetime: "8/18/1991, 05:30:00",
};

const moment = new memories(options);

/**
 * Debug
 *
 *? Saat ini hanya dapat mencetak properti kelas diterminal atau cmd,
 *? dan mencetak error ketika parameter untuk deklarasi kelas tidak diisi.
 *
 */
moment.set("isDebug", false);

const data = {
  name: "Ayus Irfang Filaras",
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

console.log("Nama: %s\nUmur: %s", data.name, data.umur);
module.exports = memories;
