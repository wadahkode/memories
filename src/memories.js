/**
 * Memories
 * 
 * Mengubah waktu pada artikel
 * 
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.0.0
 */
export default class Memories {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.startCalDate = this.setToLocaleDateString(this.start).split('/');
        this.startCalTime = this.setToLocaleTimeString(this.start).split(/:| /);
        this.endCalDate = this.setToLocaleDateString(this.end).split('/');
        this.endCalTime = this.setToLocaleTimeString(this.end).split(/:| /);
    }
    
    getMemoTime() {
        if (this.endCalDate.toString().match(this.startCalDate) && this.endCalTime.toString().match(this.startCalTime)) {
            return 'baru saja';
        }
        else {
            return this.getAccordingMonth();
        }
    }
    
    getAccordingMonth() {
        switch(parseInt(this.endCalDate[0])) {
            case 1: return this.getMonthMemo(31);
            case 2: return this.getMonthMemo(29);
            case 3: return this.getMonthMemo(31);
            case 4: return this.getMonthMemo(30);
            case 5: return this.getMonthMemo(31);
            case 6: return this.getMonthMemo(30);
            case 7: return this.getMonthMemo(31);
            case 8: return this.getMonthMemo(31);
            case 9: return this.getMonthMemo(30);
            case 10: return this.getMonthMemo(31);
            case 11: return this.getMonthMemo(30);
            case 12: return this.getMonthMemo(31);
        }
    }
    
    getMonthMemo(day, month=12) {
        let [m,d,y] = this.endCalDate,
            [h,i,s] = this.endCalTime,
            [M,D,Y] = this.startCalDate,
            [H,I,S] = this.startCalTime;
            
        console.log(month >= M);
    }
    
    setToLocaleDateString(date) {
        return date.toLocaleDateString('en-US', {
            hour12: false
        });
    }
    
    setToLocaleTimeString(date) {
        return date.toLocaleTimeString('en-US', {
            hour12: false
        });
    }
}