const memories = require("./src/memories");
const article = document.querySelectorAll("time");

article.forEach((time) => {
  const prefix = time.getAttribute("prefix");
  const options = {
    datetime: new Date(
      time.getAttribute("datetime").toString().replace(",", "")
    ),
    language: "id-ID",
    locale: {
      timeZone: "Asia/Jakarta",
      hour12: false,
    },
  };

  setInterval(() => {
    if (prefix == "expired") {
      let statusExpired = getExpired(options);
      if (statusExpired) {
        return (time.innerHTML = "expired: <b>sudah kadaluarsa</b>");
      } else {
        return (time.innerHTML = "expired: <b>" + time.dateTime + "</b>");
      }
    } else {
      return getMemories(options, prefix).then((response) => {
        if (response) {
          time.innerHTML = response;
        }
        // clearInterval(refresh);
      });
    }
  }, 10);
});

// Mengatur waktu standar menjadi waktu moment
async function getMemories(options = {}, prefix) {
  const moment = new memories(options);

  if (prefix != null) {
    return await moment.timeAgo(prefix, {
      y: "tahun",
      m: "bulan",
      d: "hari",
      w: "minggu",
      h: "jam",
      i: "menit",
      s: "detik",
      n: "baru saja",
    });
  }
  return await moment.timeAgo();
}

// Mengatur waktu standar menjadi waktu moment
function getExpired(options = {}) {
  const moment = new memories(options);

  return moment.expired("in day");
}
