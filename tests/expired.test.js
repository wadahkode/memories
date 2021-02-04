const memories = require("./memories.test");

const product = new memories();
const productList = [
  {
    id: 1,
    name: "oreo",
    expired: "2/4/2021, 22:29:00",
  },
  {
    id: 2,
    name: "silverqueen",
    expired: "2/4/2021, 23:00:00",
  },
  {
    id: 3,
    name: "kopi kapal api",
    expired: "2/5/2022, 05:30:00",
  },
];

product.set("isDebug", true);
let status = false;

productList.map((item) => {
  product.set("datetime", item.expired);
  /**
   * Secara logika waktu expired itu lebih tinggi dari waktu sekarang,
   * Maka dari itu cukup beri parameter in second, in minute, in hour, dan seterusnya.
   *
   * @return boolean true | false
   */
  status = product.expired("in year");

  console.log(
    status
      ? `Produk ${item.name} telah kadaluarsa!`
      : `Produk ${item.name} belum kadaluarsa!`
  );
});
