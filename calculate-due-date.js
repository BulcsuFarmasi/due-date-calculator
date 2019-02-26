DateHelper = require('./date-helper');

const dateHelper = new DateHelper();

const CalculateDueDate = (reportedTime, tournaroundTime) => {
    
    if (!dateHelper.isInWorkTime(reportedTime)) {
        throw 'The reported time is not in work time';
    }
    
    const endTime = dateHelper.calculateEndTime(reportedTime, tournaroundTime)
     
    if (dateHelper.isFinishedInStartDay(endTime)) {
        return new Date(reportedTime.setUTCHours(endTime));
    }else {
        const newStartTime = dateHelper.calculateNewStartTime(reportedTime);

        const remainingHours = dateHelper.calculateRemainingHours(endTime);

        return CalculateDueDate(newStartTime, remainingHours);
    }
    
    
}