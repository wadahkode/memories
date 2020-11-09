import Memories from './memories';

let articleTime = document.querySelectorAll('time');

articleTime.forEach(time => {
    let start = new Date(time.getAttribute('datetime').toString().replace(',','')),
    refresh = setInterval(async () => {
        time.innerHTML = await getMemories(start, new Date());
    }, 10);
    
});

async function getMemories(start, end) {
    const memories = new Memories(start, end);
    
    return memories.getMemoTime();
}
//exports.default = Memories;