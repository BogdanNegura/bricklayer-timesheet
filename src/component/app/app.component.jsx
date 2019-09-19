import React from 'react'
import WeekDays from '../week-days'
import TotalHours from '../total-hours'
import SalaryCalculator from '../salary-calculator'
import './app.component.css'

const TimeSheetApp = () => {
    return (
        <div>
            <h1>Timesheet App</h1>
            <WeekDays/>
            <TotalHours/>
            <SalaryCalculator/>
        </div>
    )
}

export default TimeSheetApp