### catatan

Saya menulis panduan ini dengan bahasa indonesia, jika anda membutuhkan repository ini untuk bagian kecil proyek anda atau sebagai bahan belajar anda, saya merekomendasikan gunakan browser chrome, dan translate panduan ini sesuai dengan bahasa yang anda gunakan.

[![Build Status](https://travis-ci.com/wadahkode/memories.svg?branch=dev)](https://travis-ci.com/wadahkode/memories)

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
<time
  datetime="12/7/2020, 16:11:00"
  prefix="birthday|expired|schedule|countdown"
></time>
<script src="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.1.8.1/build/memories.min.js"></script>
...
```

Datetime attributes:

1.  datetime
    Isi dengan tanggal, saya merekomendasikan gunakan format seperti ini:

    ```html
    datetime="12/7/2020, 16:11:00"
    ```

    Penjelasan:

    - Angka 12 adalah bulan
    - Angka 7 adalah hari
    - Angka 2020 adalah tahun
    - Angka 16 adalah jam
    - Angka 11 adalah menit
    - Angka 00 adalah detik

    <br/>

2.  prefix
    Isi dengan birthday atau expired atau schedule atau countdown, contoh:

    ```html
    prefix="birthday"
    ```

### Cara penggunaan pada lingkungan nodejs

```javascript
const memories = require('@wadahkode/memories');
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

Akhir kata semoga bermanfaat untuk proyek anda.
