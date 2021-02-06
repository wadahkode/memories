// Test membuat jadwal waktu
const memories = require('./memories.test');
const kelas = new memories();
kelas.set('isDebug', false);
kelas.set('language', 'id-ID');
kelas.set('locale', {
  timeZone: 'Asia/Jakarta',
  hour12: false,
});

const jadwal = {
  ujian: [
    {
      id: 1,
      hari: 'sabtu',
      jam: '2/6/2021, 09:58:00',
      mapel: 'MTK',
    },
    {
      id: 2,
      hari: 'senin',
      jam: '2/9/2021, 08:30:00',
      mapel: 'Bahasa Inggris',
    },
  ],
};

let status = false;

jadwal.ujian.map((pelajaran) => {
  kelas.set('datetime', pelajaran.jam);

  status = kelas.schedule('year|month|day|hour|minute|second');

  console.log(
    status
      ? `${pelajaran.id}. Ujian ${pelajaran.mapel} sudah dimulai!`
      : `${pelajaran.id}. Ujian ${pelajaran.mapel} belum dimulai!`
  );
});
