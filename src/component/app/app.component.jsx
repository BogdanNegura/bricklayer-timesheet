import React, { useState } from 'react'
import WeekDays from '../week-days'
import TotalHours from '../total-hours'
import SalaryCalculator from '../salary-calculator'
import './app.component.css'

const TimeSheetApp = () => {
    const [totalHours, setTotalHours] = useState(0) 

    return (
        <div>
            <h1>Timesheet App</h1>
            <WeekDays sth={setTotalHours}/>
            <TotalHours th={totalHours}/>
            <SalaryCalculator toho={totalHours}/>
        </div>
    )
}

export default TimeSheetApp