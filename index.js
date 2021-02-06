const memories = require('./src/memories');
const article = document.querySelectorAll('time');

article.forEach((time) => {
  const prefix = time.getAttribute('prefix');
  const options = {
    datetime: time.getAttribute('datetime').toString().replace(',', ''),
    language: 'id-ID',
    locale: {
      timeZone: 'Asia/Jakarta',
      hour12: false,
    },
  };

  let refresh = setInterval(() => {
    if (prefix == 'expired') {
      let statusExpired = getExpired(options);
      if (statusExpired) {
        return (time.innerHTML = 'expired: <b>sudah kadaluarsa</b>');
      } else {
        return (time.innerHTML = 'expired: <b>' + time.dateTime + '</b>');
      }
    } else if (prefix == 'schedule') {
      let status = getSchedule(options);
      if (status == undefined) clearInterval(refresh);
      if (status) {
        return (time.innerHTML = time.dateTime + '<b> (sudah dimulai)</b>');
      } else {
        return (time.innerHTML = time.dateTime + '<b> (belum dimulai)</b>');
      }
    } else {
      return getMemories(options, prefix).then((response) => {
        if (response) {
          time.innerHTML = response;
        }
      });
    }
  }, 10);
});

// Mengatur waktu standar menjadi waktu moment
async function getMemories(options = {}, prefix) {
  const moment = new memories();
  moment.set('isDebug', false);
  moment.set('datetime', options.datetime);
  moment.set('language', options.language);
  moment.set('locale', options.locale);

  if (prefix != null) {
    return await moment.timeAgo(prefix, {
      y: 'tahun',
      m: 'bulan',
      d: 'hari',
      w: 'minggu',
      h: 'jam',
      i: 'menit',
      s: 'detik',
      n: 'baru saja',
    });
  }
  return await moment.timeAgo();
}

// Expired
function getExpired(options = {}) {
  const moment = new memories(options);
  moment.set('isDebug', false);
  moment.set('datetime', options.datetime);
  moment.set('language', options.language);
  moment.set('locale', options.locale);

  return moment.expired('in day');
}

// Schedule
function getSchedule(options = {}) {
  const moment = new memories(options);
  moment.set('isDebug', false);
  moment.set('datetime', options.datetime);
  moment.set('language', options.language);
  moment.set('locale', options.locale);

  return moment.schedule('day|hour|miute|second');
}
