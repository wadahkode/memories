const Memories = require("./memories.test");

const start = new Date("1/18/1991, 00:00:00"),
  end = new Date();

const moment = new Memories(start, end, "id-ID", {
  timeZone: "Asia/Jakarta",
  hour12: false,
});

console.log(moment);
