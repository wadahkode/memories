const memories = require("./memories.test");

const product = new memories();
const productList = [
  {
    id: 1,
    name: "oreo",
    expired: "2/4/2021, 21:11:00",
  },
  {
    id: 2,
    name: "silverqueen",
    expired: "2/4/2021, 22:17:00",
  },
  {
    id: 1,
    name: "kopi kapal api",
    expired: "2/5/2021, 21:30:00",
  },
];

product.set("isDebug", true);
let status = false;

productList.map((item) => {
  product.set("datetime", item.expired);
  status = product.expired(1, "hour");

  console.log(
    status
      ? `produk ${item.name} telah kadaluarsa!`
      : "Produk masih bisa dimakan"
  );
});
