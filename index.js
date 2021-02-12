const memories = require('./src/memories')

async function main() {
  const container = document.querySelector('body')
  const timelist = await getTimelist(container)

  return timelist
}

function getTimelist(c) {
  return c.querySelectorAll('time')
}

// Mengatur waktu standar menjadi waktu moment
function getMemories(options = {}, prefix) {
  const moment = new memories()
  moment.set('isDebug', false)
  moment.set('datetime', options.datetime)
  moment.set('language', options.language)
  moment.set('locale', options.locale)

  if (prefix != null) {
    return moment.timeAgo(prefix)
  }
  return moment.timeAgo()
}

// Expired
function getExpired(options = {}) {
  const moment = new memories(options)
  moment.set('isDebug', false)
  moment.set('datetime', options.datetime)
  moment.set('language', options.language)
  moment.set('locale', options.locale)

  return moment.expired('year|month|day|hour|minute|second')
}

// Schedule
function getSchedule(options = {}) {
  const moment = new memories(options)
  moment.set('isDebug', false)
  moment.set('datetime', options.datetime)
  moment.set('language', options.language)
  moment.set('locale', options.locale)

  return moment.schedule('year|month|day|hour|minute|second')
}

// Countdown
function getCountdown(options) {
  const moment = new memories(options)
  moment.set('isDebug', false)
  moment.set('datetime', options.datetime)
  moment.set('language', options.language)
  moment.set('locale', options.locale)

  return moment.countdown()
}

let refresh = setInterval(() => {
  main().then((timelist) => {
    if (typeof timelist == 'object') {
      timelist.forEach((time) => {
        const prefix = time.getAttribute('prefix')
        const options = {
          datetime: time.getAttribute('datetime').toString().replace(',', ''),
          language: 'id-ID',
          locale: {
            timeZone: 'Asia/Jakarta',
            hour12: false,
          },
        }

        if (prefix == 'expired') {
          let statusExpired = getExpired(options)
          if (statusExpired) {
            return (time.innerHTML = '<b>sudah</b>')
          } else {
            return (time.innerHTML = '<b>belum</b>')
          }
        } else if (prefix == 'schedule') {
          let status = getSchedule(options)
          if (status == undefined) clearInterval(refresh)
          if (status) {
            return (time.innerHTML = '<b>sudah dimulai</b>')
          } else {
            return (time.innerHTML = '<b>belum dimulai</b>')
          }
        } else if (prefix == 'countdown') {
          let status = getCountdown(options)

          if (status.distance < 0) {
            // clearInterval(refresh)
            return (time.innerHTML = `<b>sudah berakhir</b>`)
          } else {
            return (time.innerHTML = `<b>${status.day}, ${status.hour} : ${status.minute} : ${status.second}</b>`)
          }
        } else {
          time.innerHTML = getMemories(options, prefix)
        }
      })
    }
  })
}, 20)

module.exports = {
  ref: (prop = Object | Array | undefined, isDebug = false) => {
    return new memories(prop, isDebug)
  },
}
