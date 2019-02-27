class DateHelper {

    constructor () {
        this.workTimeStarts = 9;
        this.workTimeEnds = 17;
    }

    calculateEndTime (startTime, addTime) {
        return startTime.getHours() + addTime;
    }

    calculateNewStartTime (startTime) {

        const nextDay = this.calculateNextDay(startTime)
        startTime.setDate(nextDay);
        startTime.setHours(this.workTimeStarts);

        return startTime;
    }

    calculateNextDay (date) {
        const weekEnd = 3;
        const nextDay = 1

        return (this.isFriday(date)) ?  date.getDate() + weekEnd 
                                          :  date.getDate() + nextDay;
    }

    calculateRemainingHours (endTime) {
        return endTime - this.workTimeEnds;
    }

    isDate (date) {
        return date instanceof Date
    }

    isFinishedInStartDay (endTime) {
        return endTime < this.workTimeEnds;
    }

    isFriday (date) {
        const friday = 5;
        return date.getDay() === friday;
    }

    isWorkDay(date) {
        const weekEndDays = [6,0];

        return weekEndDays.indexOf(date.getDay()) === -1;
    }

    isWorkHours(date) {
        return this.workTimeStarts <= date.getHours() && date.getHours() < this.workTimeEnds;
    }

    isInWorkTime (date) {
        return this.isWorkDay(date) && this.isWorkHours(date)
    }

}

module.exports = DateHelper