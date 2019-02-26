const CalculateDueDate = (reportedTime, tournaroundTime) => {
    console.log(reportedTime, tournaroundTime);

    
    const worktimeStarts = 9;
    const worktimeEnds = 17;

    const endTimeHours = reportedTime.getUTCHours() + tournaroundTime;
     
    if (endTimeHours > worktimeEnds) {
        let newDate;
        if (reportedTime.getDay() === 5) {
            newDate = reportedTime.getUTCDate() + 3; 
        } else {
            newDate = reportedTime.getUTCDate() + 1;
        }
        reportedTime.setUTCDate(newDate);
        reportedTime.setUTCHours(worktimeStarts);

        const newStartTime = reportedTime;


        const remainingHours = endTimeHours - worktimeEnds;
        return CalculateDueDate(newStartTime, remainingHours);
        
    } else {
        return new Date(reportedTime.setUTCHours(endTimeHours));
    }
    
    
}

