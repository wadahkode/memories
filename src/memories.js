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
        this.currentTime = false;
        this.day = 0;
        this.month = 0;
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
        
        this.day = day;
        this.month = month;
        
        if (this.endCalDate.includes(M) && this.endCalDate.includes(Y)) {
            this.getOnlyTime(24,60,60,this.endCalDate.includes(M), this.endCalDate.includes(D));
            
            return this.currentTime;
        } else {
            this.getOnlyDate(month, day);
            
            return this.currentTime;
        }
    }
    
    getOnlyTime(hour, minutes, seconds, onMonth = false, onDay = false) {
        let [h,i,s] = this.endCalTime,
            [H,I,S] = this.startCalTime,
            current;
        
        if (onMonth) {
            if (onDay) {
                //console.log((parseInt(i) == I));
                // seconds
                if ((parseInt(h) == H) && (parseInt(i) == I) && (parseInt(s) != S)) {
                    this.currentTime = parseInt(s) + ' detik yang lalu';
                }
                // minutes
                else if ((parseInt(h) == H) && (parseInt(i) != I)) {
                    current = (i > I) && i - I;
                    
                    this.currentTime = (current < minutes) && parseInt(current) + ' menit yang lalu';
                }
                // minutes or hour
                else if ((parseInt(h) != H)) {
                    current = (i >= I) && (i - I) + minutes;
                    
                    // jika jam tidak sama dan menit sudah lebih dari 60,
                    // maka jam sekarang dikurangi jam sebelumnya.
                    if ((parseInt(h) > H) && (parseInt(h) < hour) && (current >= minutes)) {
                        this.currentTime = (h - H) + ' jam yang lalu';
                    } else {
                        current = (parseInt(I) > i) && (parseInt(minutes - I) + parseInt(i));
                        
                        // jika jam sekarang lebih dari jam sebelumnya tetapi
                        // menitnya masih dibawah 60 maka tampilkan menit yang sudah berlalu
                        if ((current < 60) && (parseInt(h) > H)) {
                            this.currentTime = (current) + ' menit yang lalu';
                        } else {
                            this.currentTime = (hour - parseInt(H - h)) + ' jam yang lalu';
                        }
                    }
                }
            } else {
                let day = (this.day + parseInt(this.endCalDate[1])) - (this.day + parseInt(this.startCalDate[1])),
                    currentMinutes;
                    
                if (day == 1) {
                    if ((parseInt(h) > H)) {
                        current = ((hour + parseInt(h)) - parseInt(H));
                        
                        if (current > hour) {
                            this.currentTime = ((parseInt(this.endCalDate[1]) > this.startCalDate[1]) && (parseInt(this.endCalDate[1]) - this.startCalDate[1]) + ' hari yang lalu');
                        }
                    }
                    current = ((hour + parseInt(h)) - parseInt(H));
                    currentMinutes = (parseInt(minutes - I) + parseInt(i));
                    
                    if ((current == hour) && (currentMinutes) > minutes) {
                        this.currentTime = (Math.floor(hour % current) + 1) + ' hari yang lalu';
                    } else {
                        this.currentTime = ((current) - 1) + ' jam yang lalu';
                    }
                } else {
                    this.getOnlyDate(this.month, this.day);
                }
            }
        } else {
            this.getOnlyDate(this.month, this.day);
        }
    }
    
    getOnlyDate(month, day) {
        let [m,d,y] = this.endCalDate,
            [M,D,Y] = this.startCalDate,
            current;
        
        if ((parseInt(m) > M) && (parseInt(d) >= D) && (parseInt(y) == Y)) {
            current = (((d - D) + day) * (m - M));
            
            if (current >= month) {
                this.currentTime = (m - M) + ' bulan yang lalu';
            }
        } else if ((parseInt(m) > M) && (parseInt(d) < D) && (parseInt(y) == Y)) {
            current = (((d - D) + day) * (m - M));
            //this.currentTime = (current) + ' hari yang lalu';
            
            if (current > 7 && current < 14) {
                this.currentTime = this.getWeekAgo(1);
            } else if (current > 14 && current < 21) {
                this.currentTime = this.getWeekAgo(2);
            } else if (current > 21 && current < day) {
                this.currentTime = this.getWeekAgo(3);
            }
        } else if ((parseInt(m) == M) && (parseInt(d) > D) && (parseInt(y) == Y)) {
            current = (((d - D) + day) * (m - M));
            current = ((current) + (d - D));
            
            if (current < 7) {
                this.currentTime = (current) + ' hari yang lalu';
            } else if (current >= 7 && current < 14) {
                this.currentTime = this.getWeekAgo(1);
            } else if (current >= 14 && current < 21) {
                this.currentTime = this.getWeekAgo(2);
            } else if (current >= 21 && current < day) {
                this.currentTime = this.getWeekAgo(3);
            }
        }
        else {
            if (this.endCalDate.includes(M) && this.endCalDate.includes(D)) {
                current = (month - M) + parseInt(m);
                this.currentTime = (current == month) && (y - Y) + ' tahun yang lalu';
            }
            current = (month - M) + parseInt(m);
            
            this.currentTime = (current >= 12) ? (y - Y) + ' tahun yang lalu' : (current) + ' bulan yang lalu';
        }
    }
    
    getWeekAgo(length) {
        return (length) + ' minggu yang lalu';
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