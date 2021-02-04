<a href="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.1.1/">
    <img src="https://img.shields.io/jsdelivr/npm/hm/@wadahkode/memories?style=flat-square" alt="jsDelivr Downloads"/>
</a>
<a href="https://www.npmjs.com/package/@wadahkode/memories">
    <img src="https://img.shields.io/npm/dw/@wadahkode/memories?style=flat-square" alt="NPM Downloads"/>
</a>

### Memories

Mengubah waktu standar menjadi waktu moment.

### Mulai cepat

```html
...
<time datetime="12/7/2020, 16:11:00"></time>
<script src="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.1.3/build/memories.min.js"></script>
...
```

### Cara penggunaan pada lingkungan nodejs

```javascript
const memories = require("@wadahkode/memories");
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
