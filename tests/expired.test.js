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
    id: 1,
    name: "kopi kapal api",
    expired: "2/5/2021, 05:30:00",
  },
];

product.set("isDebug", true);
let status = false;

productList.map((item) => {
  product.set("datetime", item.expired);
  status = product.expired("in hour");

  console.log(
    status
      ? `Produk ${item.name} telah kadaluarsa!`
      : `Produk ${item.name} belum kadaluarsa!"`
  );
});
