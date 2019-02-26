class DateHelper {

    constructor () {
        this.workTimeStarts = 9;
        this.workTimeEnds = 17;
    }

    calculateEndTime (startTime, addTime) {
        return startTime.getUTCHours() + addTime;
    }

    calculateNewStartTime (startTime) {

        const nextDay = this.calculateNextDay(startTime)
        startTime.setUTCDate(nextDay);
        startTime.setUTCHours(this.workTimeStarts);

        return startTime;
    }

    calculateNextDay (time) {
        const weekEnd = 3;
        const nextDay = 1

        return (this.isFriday(time)) ?  time.getUTCDate() + weekEnd 
                                          :  time.getUTCDate() + nextDay;
    }

    calculateRemainingHours (endTime) {
        return endTime - this.workTimeEnds;
    }

    isFinishedInStartDay (endTime) {
        return endTime < this.workTimeEnds;
    }

    isFriday (time) {
        const friday = 5;
        return time.getUTCDay() === friday;
    }

    isWorkDay(time) {
        const weekEndDays = [6,0];

        return weekEndDays.indexOf(time.getUTCDay()) === -1;
    }

    isWorkHours(time) {
        return this.workTimeStarts <= time.getUTCHours() && time.getUTCHours() < this.workTimeEnds;
    }

    isInWorkTime (time) {
        return this.isWorkDay(time) && this.isWorkHours(time)
    }

}

module.exports = DateHelper