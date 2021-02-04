<a href="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.1.1/">
    <img src="https://img.shields.io/jsdelivr/npm/hm/@wadahkode/memories?style=flat-square" alt="jsDelivr Downloads"/>
</a>
<a href="https://www.npmjs.com/package/@wadahkode/memories">
    <img src="https://img.shields.io/npm/dw/@wadahkode/memories?style=flat-square" alt="NPM Downloads"/>
</a>

### Memories

Mengubah waktu menjadi momen yang sudah berlalu, ibaratnya kapan waktu kenangan itu berlalu,

### Mulai cepat

```html
...
<time datetime="12/7/2020, 16:11:00" prefix="birthday|expired"></time>
<script src="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.1.6/build/memories.min.js"></script>
...
```

Atur isi prefix dengan birthday atau expired.

### Cara penggunaan pada lingkungan nodejs

```javascript
const memories = require("@wadahkode/memories");
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
console.log(`Sudah ${moment.delta("month")} bulan berlalu sejak lahir`);

console.log("\n------ Test Timeout 2 seconds ------");

let sec2 = new memories({ datetime: new Date() });
setTimeout(() => {
  let result = sec2.delta("second");

  if (result === 2) {
    console.log("✔️ %s", " memories.delta seems OK.");
  } else {
    console.log("❌ %s", " Expected 2 but got " + result);
  }
}, 2000);
```

### Manual

Untuk melakukan perubahan secara manual baca petunjuk dibawah ini:

### syarat

<ul>
    <li>npm sudah terinstall</li>
    <li>webpack sudah terinstall</li>
</ul>

### Mengunduh repository dan melihat perubahan

    $ git clone https://github.com/wadahkode/memories.git
    $ npm install
    $ npm run start

### Build

    $ npm run build

### catatan

Mungkin masih banyak bug/kesalahan, jadi silahkan tinggalkan issue atau lakukan pull request,
jangan sungkan untuk saling berbagi, karena dengan berbagi akan
menambah wawasan dan pengetahuan kita.
