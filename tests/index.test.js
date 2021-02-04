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
console.log(`Sudah ${moment.delta('month')} bulan berlalu sejak lahir`);

console.log('\n------ Test Timeout 2 seconds ------');

let sec2 = new memories({datetime: new Date()});
setTimeout(()=> {
  let result = sec2.delta('second');

  if(result === 2){
    console.log("✔️ memories.delta seems OK.");
  }
  else{
    console.log("❌ Expected 2 but got "+result);
  }
}, 2000);

module.exports = memories;