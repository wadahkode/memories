const memories = require('./memories.test');

const product = new memories();
product.set('language', 'id-ID');
product.set('locale', {
  timeZone: 'Asia/Jakarta',
  hour12: false,
});

const productList = [
  {
    id: 1,
    name: 'oreo',
    expired: '2/4/2021, 22:29:00',
  },
  {
    id: 2,
    name: 'silverqueen',
    expired: '2/6/2021, 10:00:00',
  },
  {
    id: 3,
    name: 'kopi kapal api',
    expired: '2/5/2022, 05:30:00',
  },
];

product.set('isDebug', true);

let status = false;

productList.map((item) => {
  product.set('datetime', item.expired);
  /**
   * Secara logika waktu expired itu lebih tinggi dari waktu sekarang,
   * Maka dari itu cukup beri parameter in second, in minute, in hour, dan seterusnya.
   *
   * atau anda mau dihitung dari detik, menit, jam, hari, bulan, dan tahun
   * maka berikan parameter year|month|day|hour|minute|second untuk menghitung waktu expired.
   *
   * @return boolean true | false
   */
  status = product.expired('in day');

  console.log(
    status
      ? `Produk ${item.name} telah kadaluarsa!`
      : `Produk ${item.name} belum kadaluarsa!`
  );
});
