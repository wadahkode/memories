import Memories from './memories';

let articleTime = document.querySelectorAll('time'),
    cronJob = document.querySelector('#cron-job');

articleTime.forEach(time => {
    let start = new Date(time.getAttribute('datetime').toString().replace(',','')),
    refresh = setInterval(async () => {
        time.innerHTML = await getMemories(start, new Date());
    }, 10);
    
});

let setCronJob = setInterval(async () => {
    let start = new Date("11/10/2022, 11:00:00");
    cronJob.innerHTML = await getCronJob(start, new Date());
}, 1000);

async function getCronJob(start,end) {
    const memories = new Memories(start,end);
    
    return memories.getCronJob();
}

async function getMemories(start, end) {
    const memories = new Memories(start, end);
    
    return memories.getMemoTime();
}
//exports.default = Memories;