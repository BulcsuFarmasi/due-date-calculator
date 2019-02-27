DateHelper = require('./date-helper');

const dateHelper = new DateHelper();

const CalculateDueDate = (submitDate, turnaroundTime) => {

    console.log(submitDate);
    

    if (!dateHelper.isDate(submitDate)) {
        throw 'The submit date time is a not a date'
    }

    if (isNaN(Number(turnaroundTime))) {
        throw 'The turnaround time is not a number'
    }

    
    if (!dateHelper.isInWorkTime(submitDate)) {
        throw 'The submit date is not in work time';
    }
    
    const endTime = dateHelper.calculateEndTime(submitDate, turnaroundTime)
     
    if (dateHelper.isFinishedInStartDay(endTime)) {
        return new Date(submitDate.setHours(endTime));
    }else {
        const newStartTime = dateHelper.calculateNewStartTime(submitDate);

        const remainingHours = dateHelper.calculateRemainingHours(endTime);

        return CalculateDueDate(newStartTime, remainingHours);
    }
    
    
}