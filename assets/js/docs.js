/**
 * Dokumentasi
 *
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.1.81
 * @license MIT
 */
const container = document.querySelector('main');

function main(e) {
  let el = document.querySelector(e.target.hash);

  if (el !== '') {
    container.innerHTML = `
      <div class="bg-white dark:bg-transparent rounded shadow-2xl dark:shadow-md mt-6 col-start-1 col-span-2 p-4 md:dark:bg-gray-900 md:col-start-2 md:col-span-4 md:mt-6 md:px-6 md:pb-20 md:pt-6">
        ${elementForPrinted(el.id)}
      </div>
    `;
  }
}

function elementForPrinted(id) {
  switch (id) {
    case 'how-to-install':
      return howToInstall();
  }
}

function howToInstall() {
  return `
    <h1 class="text-2xl md:text-3xl text-gray-600 dark:text-white font-bold">Instalasi</h1>
    <p class="text-lg text-gray-600 dark:text-white">Panduan instalasi pustaka memories</p>
    <hr class="my-6" />

    <div>
      <h1 class="text-lg md:text-2xl text-gray-600 dark:text-white font-bold">Menggunakan CDN</h1>
      <div class="text-white dark:text-gray-600 mt-4 rounded-full overflow-y-hidden">
        <pre class="py-2"><code class="p-2 bg-gray-700 dark:bg-white rounded-full md:px-4 md:py-3">&lt;script src="https://cdn.jsdelivr.net/npm/@wadahkode/memories@1.1.81/build/memories.min.js"&gt;&lt;/script&gt;</code></pre>
      </div>
      <p class="my-6 text-gray-600 dark:text-white">Tidak ada konfigurasi jika anda menggunakan CDN, cukup buat element baru seperti dibawah ini:</p>
      <div class="text-white dark:text-gray-600 mt-4 rounded-full overflow-y-hidden">
        <pre class="py-2"><code class="p-2 bg-gray-700 dark:bg-white rounded-full md:px-4 md:py-3">&lt;time datetime="12/7/2020, 16:11:00" prefix="birthday|expired|schedule|countdown"&gt;&lt;/time&gt;</code></pre>
      </div>
      <h1 class="text-lg text-gray-600 dark:text-white mt-6">Datetime attributes:</h1>
      <ol class="text-gray-600 dark:text-white">
        <li>
          <div class="my-2">1. datetime</div>
          <div class="my-2">
            Isi dengan tanggal, rekomendasi gunakan format seperti ini:
            <div class="text-white dark:text-gray-600 mt-4 rounded-full overflow-y-hidden">
              <pre class="py-2"><code class="p-2 bg-gray-700 dark:bg-white rounded-full md:px-4 md:py-3">datetime="12/7/2020, 16:11:00"</code></pre>
            </div>
          </div>
          <div class="my-4">
          Penjelasan:
          <ul>
            <li>
            - Angka 12 adalah bulan
            </li>
            <li>
            - Angka 7 adalah hari
            </li>
            <li>
            - Angka 2020 adalah tahun
            </li>
            <li>
            - Angka 16 adalah jam
            </li>
            <li>
            - Angka 11 adalah menit
            </li>
            <li>
            - Angka 00 adalah detik
            </li>
          </ul>
          </div>
        </li>
        <li>
          <div class="my-4">2. prefix</div>
          <div class="my-4">
            Isi dengan birthday atau expired atau schedule atau countdown, contoh:
            <div class="text-white dark:text-gray-600 mt-4 rounded-full overflow-y-hidden">
              <pre class="py-2"><code class="p-2 bg-gray-700 dark:bg-white rounded-full md:px-4 md:py-3">prefix="birthday"</code></pre>
            </div>
          </div>
        </li>
        <li>
          <h1 class="text-lg md:text-2xl font-bold">Modifikasi dengan konfigurasi</h1>
          <p class="mt-3">
            Secara otomatis library memories akan mengembalikan sebuah object baru {ref: f}, yang dapat anda gunakan
            di browser untuk melakukan konfigurasi secara manual dari mulai mengatur bahasa, menentukan tanggal, menentukan zona waktu dan lain-lain.<br /><br />
            Untuk lebih lanjut lihat contoh dibawah ini:
          </p>
          <div class="bg-gray-800 text-white dark:bg-white dark:text-gray-600 mt-4 @rounded-full @overflow-y-hidden p-2 rounded">
            &lt;script&gt;<br />
            &nbsp;&nbsp;const ref = Memories.ref();<br />
            &nbsp;&nbsp;ref.set('datetime', '1/1/1970');<br /><br />
            &nbsp;&nbsp;// Cetak umur<br />
            &nbsp;&nbsp;console.log(ref.timeAgo('birthday'))<br />
            &lt;/script&gt;
          </div>
        </li>
      </ol>
    </div>

    <div class="mt-10 text-gray-600 dark:text-white">
      <h1 class="text-lg md:text-2xl font-bold">Menggunakan NPM</h1>
      <p class="mt-2 text-gray-600 dark:text-white">Pustaka memories telah tersedia di NPM, untuk mengunduhnya anda dapat menggunakan perintah dibawah ini:</p>
      <div class="text-white dark:text-gray-600 mt-4 rounded-full overflow-y-hidden">
        <pre class="py-2"><code class="p-2 bg-gray-700 dark:bg-white rounded-full md:px-4 md:py-3">npm install @wadahkode/memories --save-dev</code></pre>
      </div>
      <div class="mt-6">
        <h1 class="text-lg font-bold">Cara menggunakan pada lingkungan nodejs</h1>
        <div class="bg-gray-800 text-white dark:bg-white dark:text-gray-600 mt-4 @rounded-full overflow-y-hidden p-2 rounded">
            const memories = require('@wadahkode/memories')<br />
            const moment = new memories();<br /><br />
            // atur tanggal<br />
            moment.set('datetime', '1/1/1970');<br />
            // cetak umur<br />
            console.log(moment.timeAgo('birthday'))
        </div>
        <p class="mt-3">
          Untuk lebih jelasnya anda dapat membaca dari sini <a href="" class="text-blue-500">README.md</a>
        </p>
      </div>
    </div>
  `;
}

document.querySelectorAll('a').forEach((item) => {
  item.onclick = (e) => main(e);
});
